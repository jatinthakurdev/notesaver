import React from "react";
import { useState } from "react";

function Usememo() {
  const [count, setcout] = useState(0);

  const handleclick = () => {
    setcout(count + 1);
  };


  const expensivetask = (num) => {
    console.log("inside expensive task")
    // for( let i=0; i<= 1000; i++) {}
   return num*2
  }


  let doublevalue = expensivetask(4);
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-8 text-center">

        <h2 className="text-3xl font-bold text-white mb-2">
          Counter App
        </h2>

        <p className="text-slate-400 mb-8">
          Click the button to increase the count
        </p>

        <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 mb-8">
          <h1 className="text-6xl font-bold text-white">{count}</h1>
        </div>

        <button
          onClick={handleclick}
          className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30"
        >
          Increase Count 🚀
        </button>
      </div>

      <div>
             <h1>{doublevalue}</h1>
      </div>
    </div>
  );
}

export default Usememo;