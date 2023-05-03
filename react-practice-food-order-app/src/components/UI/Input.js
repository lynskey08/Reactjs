import classes from "./Input.module.css";
import React from 'react';
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* {...props.input} makes sure that the type of input is dynamic  */}
      <input ref={ref }{...props.input}/>
    </div>
  );
});
export default Input;
