import React, { createContext } from "react";
import ChileA from "../Components/ChileA";

const data = createContext();
const data1 = createContext();

function Usecontext() {
  const name = "yoshita";
  const gender = 25;
  return (
    <div>
      Usecontext
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <ChileA />
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default Usecontext;
export{data,data1};
