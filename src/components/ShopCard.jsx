import React from "react";
import { Link } from "react-router-dom";

const ShopCard = ({ shop }) => {
  return (
    <Link to={`/shop/${shop.id}`}>
      <div className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{shop.name}</h2>
          <p className="text-gray-700">{shop.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
