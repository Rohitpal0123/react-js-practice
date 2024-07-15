import { useEffect, useState } from "react";
import Dummy from "./dummy";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count", count);
  }, [count]);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="flex flex-col">
        <button onClick={increment} className="border-black border-2 p-3">
          +
        </button>
        <span className=" px-6 py-3">{count}</span>
        <button onClick={decrement} className="border-black border-2 p-3">
          -
        </button>
        <div>
          <Dummy />
        </div>
      </div>
    </>
  );
}

export default Counter;
