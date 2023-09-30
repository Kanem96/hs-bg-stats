import React, { FunctionComponent } from "react";
import { DataRow } from "./Data";

export interface DropdownProps {
  dropdownOptions: DataRow[];
}

const Dropdown: FunctionComponent<DropdownProps> = ({ dropdownOptions }) => {
  return (
    <div id="dropdownContainer">
      <select>
        {dropdownOptions.map((dropdownOption) => (
          <option key={dropdownOption.hero} value={dropdownOption.hero}>
            {dropdownOption.hero}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
