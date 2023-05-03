import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //useState is a react hook
  //must be called inside react component functions
  // const [title, setTitle] = useState(props.title);//wants a default state value,return var and function
  // console.log("ExpenseItem evaluated by react")
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // }

  //html elements can only have one root element
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
