import React from "react";
import ChileB from "./ChileB";

function ChileA() {
  return (
    <div className="rounded-lg border border-gray-300 bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        ChileA
      </h2>

      <div className="rounded-md border border-dashed border-gray-300 p-4">
        <ChileB />
      </div>
    </div>
  );
}

export default ChileA;