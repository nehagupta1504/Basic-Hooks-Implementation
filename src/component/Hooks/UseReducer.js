import { React, useState, useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "Increment") {
    state = state + 1;
  }
  if (action.type === "Decrement" && state > 0) {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  // const initialCount = 0;
  // const [count, setCount] = useState(initialCount);
  const initialData = 10;
  const [state, dispatch] = useReducer(reducer, initialData);
  //through dispatch we change reducer function, dispatch -> to trigger reducer function
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div
          className="button2"
          onClick={() => {
            dispatch({ type: "Increment" });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Increment
        </div>
        <div
          className="button2"
          onClick={() => {
            dispatch({ type: "Decrement" });
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Decrement
        </div>
      </div>
    </>
  );
};

export default UseReducer;
