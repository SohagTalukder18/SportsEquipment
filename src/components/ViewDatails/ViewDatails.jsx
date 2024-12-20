import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams(); // Get item ID from URL
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Fetch item details by ID
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setItemDetails(data))
      .catch((error) => console.error("Error fetching item details:", error));
  }, [id]);

  if (!itemDetails) {
    return <div><span className="loading loading-spinner loading-lg"></span></div>; // Show loading while fetching
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <img
          src={itemDetails.image}
          alt={itemDetails.itemName}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{itemDetails.itemName}</h2>
        <p className="text-gray-700 mt-2">{itemDetails.description}</p>
        <div className="mt-4">
          <p>
            <strong>Category:</strong> {itemDetails.categoryName}
          </p>
          <p>
            <strong>Price:</strong> ${itemDetails.price}
          </p>
          <p>
            <strong>Rating:</strong> {itemDetails.rating} / 5
          </p>
          <p>
            <strong>Stock Status:</strong> {itemDetails.stockStatus}
          </p>
          <p>
            <strong>Processing Time:</strong> {itemDetails.processingTime}
          </p>
          <p>
            <strong>Customization:</strong>{" "}
            {itemDetails.customization || "No customization available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
