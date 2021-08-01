import { React, useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    document.title = `Chats(${count})`;
  });
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
      </div>
    </>
  );
};

export default UseEffect;
