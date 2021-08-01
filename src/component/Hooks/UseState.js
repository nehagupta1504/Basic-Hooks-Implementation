import { React, useState } from "react";
import "./style.css";

const UseState = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div
          className="button2"
          onClick={() => {
            setCount(count + 1);
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
            count > 0 ? setCount(count - 1) : setCount(0);
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

export default UseState;
