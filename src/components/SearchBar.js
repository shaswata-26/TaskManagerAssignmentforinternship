import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <Input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search tasks"
        size="md"
      />
     
    </div>
  );
};

export default SearchBar;
