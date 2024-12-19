import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllEquipment = () => {
  // const [equipment, setEquipment] = useState([]);
  const navigate = useNavigate();
  const equipment = useLoaderData();
  console.log(equipment,'ffffffffffffffff');
  



 

  const handleViewDetails = (id) => {
    // Navigate to the details page
    navigate(`/equipment/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">All Sports Equipment</h1>

      {/* Equipment Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Stock</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {equipment.map((item) => (
              <tr
                key={item._id}
                className="hover:bg-gray-100 text-center text-gray-700"
              >
                <td className="border border-gray-300 px-4 py-2">{item.itemName}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.categoryName}
                </td>
                <td className="border border-gray-300 px-4 py-2">${item.price}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.stockStatus > 0 ? item.stockStatus : "Out of Stock"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handleViewDetails(item._id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEquipment;

