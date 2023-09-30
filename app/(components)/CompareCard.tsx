import React, { FunctionComponent, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Dropdown from "./Dropdown";
import { DataRow } from "./Data";

export interface CompareCardProps {
  heroData: DataRow[];
}

const CompareCard: FunctionComponent<CompareCardProps> = ({ heroData }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  //TODO create dropdown menu & handle hero selection dropdown

  return (
    <div className="flex mx-auto my-auto bg-slate-400/40 w-[300px] h-[320px] rounded-md cursor-pointer shadow-inner shadow-slate-400">
      {showDropdown ? (
        <Dropdown dropdownOptions={heroData} />
      ) : (
        <CiCirclePlus
          onClick={toggleDropdown}
          size={70}
          className="mx-auto self-center opacity-50 hover:scale-[-1.2]"
        />
      )}
    </div>
  );
};

export default CompareCard;
