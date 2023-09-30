"use client";

import React, { FunctionComponent } from "react";
import CompareCard from "./CompareCard";

const Comparison: FunctionComponent = () => {
  return (
    <div
      id="comparisonContainer"
      className="flex flex-row w-auto max-w-[1500px] h-[400px] mx-auto mt-8 mb-4 bg-slate-300 rounded-md"
    >
      <CompareCard />
      <CompareCard />
      <CompareCard />
      <CompareCard />
    </div>
  );
};

export default Comparison;
