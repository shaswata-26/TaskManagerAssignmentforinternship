import React from "react";
import { Select } from "@chakra-ui/react";

const SortDropdown = ({ onSort }) => {
  return (
    <Select onChange={(e) => onSort(e.target.value)} placeholder="Sort by" size="sm">
      <option value="priority">Priority</option>
      <option value="completed">Completed</option>
      
    </Select>
  );
};

export default SortDropdown;
