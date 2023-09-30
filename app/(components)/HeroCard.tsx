import React, { FunctionComponent } from "react";
import { dataRow } from "./Data";

export interface HeroCardProps {
  row: dataRow;
}

const HeroCard: FunctionComponent<HeroCardProps> = ({ row }) => {
  return (
    <div
      id="cardContainer"
      className="p-3 mx-auto mb-4 w-[600px] h-[160px] bg-cyan-700 text-white rounded-md shadow-gray-700 shadow-md hover:outline outline-yellow-400 outline-offset-0 cursor-pointer"
    >
      <div
        id="header"
        className="flex flex-row pb-0 justify-between text-xl font-bold"
      >
        <h4>{row.hero}</h4>
        <h5>{row.rating}</h5>
      </div>
      <p className="pb-2">{row.mainCurve}</p>
      <p>{row.quickGuide}</p>
    </div>
  );
};

export default HeroCard;
