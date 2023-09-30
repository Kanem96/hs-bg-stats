import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const CompareCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  //TODO create dropdown menu & handle hero selection dropdown

  return (
    <div
      className="flex mx-auto my-auto bg-slate-400/40 w-[300px] h-[320px] rounded-md hover:bg-slate-400/50 cursor-pointer shadow-inner shadow-slate-400"
      onClick={toggleDropdown}
    >
      <CiCirclePlus size={70} className="mx-auto self-center opacity-50" />
    </div>
  );
};

export default CompareCard;
