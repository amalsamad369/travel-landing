import React, { useState } from "react";

const Footer12 = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 2);
  };

  const handleDecrement = () => {
    setCount(count - 2);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-red-400 p-4 text-white">
      <h1 className="text-3xl font-bold">{count}</h1>

      <button
        onClick={handleIncrement}
        className="bg-amber-300 px-4 py-2 rounded shadow"
      >
        Increment by 2
      </button>

      <button
        onClick={handleDecrement}
        className="bg-blue-300 px-4 py-2 rounded shadow"
      >
        Decrement by 2
      </button>
    </div>
  );
};

export default Footer12;
