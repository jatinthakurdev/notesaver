import React, { useContext } from "react";
import { data, data1 } from "../Pages/Usecontext";

function ChileB() {
  const name = useContext(data);
  const gender = useContext(data1);

  return (
    <div className="rounded-lg border border-gray-300 bg-gray-50 p-6">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        ChileB
      </h2>

      <div className="space-y-3">
        <div className="rounded-md bg-white p-4 shadow-sm">
          <p className="text-gray-600">Name</p>
          <h1 className="text-xl font-bold text-blue-600">
            Hi, my name is {name}
          </h1>
        </div>

        <div className="rounded-md bg-white p-4 shadow-sm">
          <p className="text-gray-600">Age</p>
          <h1 className="text-xl font-bold text-green-600">
            My age is {gender}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ChileB;