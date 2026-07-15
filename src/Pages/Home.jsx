import React from "react";
import { useState } from "react";

function Home() {
  const [count, Setcount] = useState(0);

  const handleclick = () => {
    Setcount(count + 1);
  };

  const decrementcount = () => {
    if (count > 0) {
      Setcount(count - 1);
    } else {
      Setcount(0);
    }
  };

  const reset = () => {
    Setcount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <p className="text-2xl font-semibold text-gray-800 mb-6">
          Button clicked - <span className="text-blue-600">{count}</span> times
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleclick}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>

          <button
            onClick={decrementcount}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>

          <button
            onClick={reset}
            className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
