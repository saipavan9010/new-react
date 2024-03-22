import React, { useState } from "react";
import Button from "../Components/Button";
import { useSelector } from "react-redux";

export default function Increment() {
  let [counter, setCounter] = useState(1000);
  let num = useSelector((state) => state.counter.num);

  const increment = (val, op) => {
    if (op === "Increment") setCounter((prev) => prev + val);
    else if (op === "Decrement") setCounter((prev) => prev - val);
  };
  return (
    <div>
      <h1>Inrement Activity</h1>
      <h3>The counter is {counter}</h3>
      <Button inc={increment} val={50} op="Increment" />
      <Button inc={increment} val={100} op="Increment" />
      <Button inc={increment} val={50} op="Decrement" />
      <Button inc={increment} val={100} op="Decrement" />
      <hr />
      <h3>A number from Redux sore is {num}</h3>
    </div>
  );
}
