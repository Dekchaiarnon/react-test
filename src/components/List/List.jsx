import React, { useContext, useState } from "react";
import { CategoryContext } from "../../api/CategoryContext";
import Card from "../Card/Card";
import Filter from "../Filter/Filter";

const List = () => {
  const categories = useContext(CategoryContext);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleFilterChange = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCategories([]);
    } else {
      const filtered = categories.filter((category) =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCategories(filtered);
    }
  };

  // Function to chunk the array into groups of 3 items per row
  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };


  const chunkedCategories = chunkArray(filteredCategories.length > 0 ? filteredCategories : categories, 3);

  return (
    <div className="list">
      <Filter onFilterChange={handleFilterChange} />
      {chunkedCategories.map((chunk, index) => (
        <div key={index} className="grid gap-4 grid-cols-3">
          {chunk.map((category) => (
            <div key={category.id} className="mt-20"> 
              <Card category={category} />
            </div>
          ))}
          {chunk.length < 3 && Array(3 - chunk.length).fill(null).map((_, index) => (
            <div key={`empty-${index}`} className="hidden" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default List;
