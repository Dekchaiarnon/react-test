import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onFilterChange(searchTerm);
  };

  return (
    <div className="flex items-center justify-center mb-4"> 
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-lg mr-4 text-lg focus:outline-none"
      />
      <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 focus:outline-none">
        Search
      </button>
    </div>
  );
};

export default Filter;
