import React, { useEffect, useState } from "react";

function Aboutus() {
  const [num, setnum] = useState(0);

  const add = () => {
    setnum(num + 1);
  };

  const sub = () => {
    if (num > 0) {
      setnum(num - 1);
    } else {
      setnum(0);
    }
  };

  useEffect(() => {
    console.log("render on first time", num);
  }, [num]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950">
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-75"></div>

        {/* Card */}
        <div className="relative bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-10 w-96">
          <h1 className="text-center text-3xl font-bold text-white mb-8">
            Counter App
          </h1>

          <div className="flex justify-center mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl">
              <p className="text-6xl font-extrabold text-white">{num}</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button
              onClick={sub}
              className="w-16 h-16 rounded-2xl bg-red-500 text-white text-4xl font-bold hover:scale-110 hover:bg-red-600 transition-all duration-300 shadow-lg"
            >
              -
            </button>

            <button
              onClick={add}
              className="w-16 h-16 rounded-2xl bg-emerald-500 text-white text-4xl font-bold hover:scale-110 hover:bg-emerald-600 transition-all duration-300 shadow-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
