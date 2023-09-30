"use client";

import React, { FunctionComponent } from "react";
import CompareCard from "./CompareCard";
import { DataRow } from "./Data";

export interface ComparisonProps {
  heroData: DataRow[];
}

const Comparison: FunctionComponent<ComparisonProps> = ({ heroData }) => {
  return (
    <div
      id="comparisonContainer"
      className="flex flex-row w-auto max-w-[1500px] h-[400px] mx-auto mt-8 mb-4 bg-slate-300 rounded-md"
    >
      <CompareCard heroData={heroData} />
      <CompareCard heroData={heroData} />
      <CompareCard heroData={heroData} />
      <CompareCard heroData={heroData} />
    </div>
  );
};

export default Comparison;
