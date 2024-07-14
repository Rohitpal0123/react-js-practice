import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count+1)
  },[])
  function increment() {
    setCount(count +1 );
  }

  function decrement() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={increment} className="border-black border-2 p-3">
        +
      </button>
      <span className=" px-6 py-3">{count}</span>
      <button onClick={decrement} className="border-black border-2 p-3" >-</button>
    </>
  );
}

export default Counter;
