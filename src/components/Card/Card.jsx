import React from "react";

const Card = ({ category }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-1">
      <div className="flex items-center justify-center">
        <div className="text-center mr-4">
          <strong className="block text-xl mb-1">{category.name}</strong>
          <span className="text-gray-600 block">{category.address}</span>
        </div>
        <img className="w-24 h-24 rounded-full" src={category.avatar} alt="Avatar" /> 
      </div>
    </div>
  );
};

export default Card;
