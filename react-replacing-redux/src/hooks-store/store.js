import { useState, useEffect } from 'react';

/** This is our own custom Redux like store implementation */


/** Since these variables are defined outside the custom hook, every component 
 * that uses the store uses the same values.. If they were defined insid the custom
 * hook, every component would use their own unique values */
let globalState = {};
let listeners = [];
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if (shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };//merging in new data with the current globalState
  }
  actions = { ...actions, ...userActions };
};
