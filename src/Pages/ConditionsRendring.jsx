import React, { useState } from "react";

function ConditionsRendring() {
  const [login, setLogin] = useState("login");

  const handlestate = () => {
    setLogin(!login);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-slate-900 to-black px-4">
      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
        
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-zinc-800 flex items-center justify-center text-4xl">
            👤
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-white">
          {login ? "Welcome Back" : "Guest Mode"}
        </h1>

        <p className="text-zinc-400 text-center mt-3 mb-8">
          {login
            ? "You are currently signed in."
            : "You are currently browsing as a guest."}
        </p>

        <button
          onClick={handlestate}
          className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.02] transition-all duration-300"
        >
          {login ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default ConditionsRendring;