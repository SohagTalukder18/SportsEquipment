// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ViewDetails = () => {
//   const { id } = useParams(); // Get item ID from URL
//   const [itemDetails, setItemDetails] = useState(null);

//   useEffect(() => {
//     // Fetch item details by ID
//     fetch(`http://localhost:5000/equipment/${id}`)
//       .then((res) => res.json())
//       .then((data) => setItemDetails(data))
//       .catch((error) => console.error("Error fetching item details:", error));
//   }, [id]);

//   if (!itemDetails) {
//     return <div><span className="loading loading-spinner loading-lg"></span></div>; // Show loading while fetching
//   }

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="max-w-2xl bg-white rounded-lg shadow-lg p-6">
//         <img
//           src={itemDetails.image}
//           alt={itemDetails.itemName}
//           className="w-full h-64 object-cover rounded-t-lg"
//         />
//         <h2 className="text-2xl font-bold mt-4">{itemDetails.itemName}</h2>
//         <p className="text-gray-700 mt-2">{itemDetails.description}</p>
//         <div className="mt-4">
//           <p>
//             <strong>Category:</strong> {itemDetails.categoryName}
//           </p>
//           <p>
//             <strong>Price:</strong> ${itemDetails.price}
//           </p>
//           <p>
//             <strong>Rating:</strong> {itemDetails.rating} / 5
//           </p>
//           <p>
//             <strong>Stock Status:</strong> {itemDetails.stockStatus}
//           </p>
//           <p>
//             <strong>Processing Time:</strong> {itemDetails.processingTime}
//           </p>
//           <p>
//             <strong>Customization:</strong>{" "}
//             {itemDetails.customization || "No customization available"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams(); // Get item ID from URL
  const [itemDetails, setItemDetails] = useState(null);
//   const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  useEffect(() => {
    // Fetch item details by ID
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setItemDetails(data))
      .catch((error) => console.error("Error fetching item details:", error));
  }, [id]);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

  if (!itemDetails) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <span className="loading loading-spinner loading-lg text-blue-600 dark:text-yellow-500"></span>
      </div>
    );
  }

  return (
    <div className={` min-h-screen bg-gray-100 dark:bg-gray-900`}>
        {/* ${isDarkMode ? "dark" : ""} */}
      <div className="max-w-xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Item Details</h1>
          {/* <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-600 dark:bg-yellow-500 text-white dark:text-black rounded-lg"
          >
            Toggle Theme
          </button> */}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {/* <img
            src={itemDetails.image}
            alt={itemDetails.itemName}
            className="w-full h-64 object-cover rounded-t-lg"
          /> */}
          <div className="w-full h-52 bg-white mx-auto">
                  <img
                     src={itemDetails.image}
                     alt={itemDetails.itemName}
                    className="w-full h-full  rounded-md "
                  /></div>
          <h2 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">
            {itemDetails.itemName}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">{itemDetails.description}</p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Category:</strong> {itemDetails.categoryName}
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Price:</strong> ${itemDetails.price}
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Rating:</strong> {itemDetails.rating} / 5
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Stock Status:</strong> {itemDetails.stockStatus}
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Processing Time:</strong> {itemDetails.processingTime}
            </p>
            <p className="text-gray-800 dark:text-gray-300">
              <strong>Customization:</strong> {itemDetails.customization || "No customization available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

