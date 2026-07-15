import React, { useEffect, useState, UseRef, useRef } from "react";

function Useref() {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("yoshits");

  const handleclick = () => {
    setcount(count + 1);
  };

  const handleinput = (e) => {
    setname(e.target.value);
  };

  const reset = () => {
    setname("")
  }

  useEffect(() => {
    console.log("rendring....");
  });

  const refelement = useRef("");

  console.log("dewdwedkwdwdwdjew", refelement);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={handleclick}>click</button>

      <div className="mt-10">
        <input type="text" value={name} onChange={handleinput} className="border-2 " />

        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

export default Useref;
