import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

// Probs 중 특정 값만 가져올 떄
// const Counter = ([initialValue]) => {

// Probs 전체 가져올 떄
const Counter = (probs) => {
  const [count, setCount] = useState(probs.initialValue);
  // Probs 중 특정 값만 가져올 떄
  //   const [count, setCount] = useState(initialValue);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

// Props 기본 값 설정
Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
