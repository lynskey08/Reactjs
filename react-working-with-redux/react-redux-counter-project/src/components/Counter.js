import { useDispatch, useSelector} from 'react-redux';
import classes from './Counter.module.css';
//import { INCREMENT } from '../store/index';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const incrementHandler = () => {
    //dispatch({type: 'increment'});//INCREMENT
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    //dispatch({type: 'increase', amount: 5});
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    //dispatch({type: 'decrement'});
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    //dispatch({type: 'toggle'});
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;




//class base components
// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.increment();
//   }

//   decrementHandler = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {

//   };

//   render () {
//     return(
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           {/*.bind(this) -  make sure that the this keyword inside of these methods refers to the class*/}
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// //maps redux state to props
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// //maps action state to the store(redux)
// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   };
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);//connect is a higher order component


