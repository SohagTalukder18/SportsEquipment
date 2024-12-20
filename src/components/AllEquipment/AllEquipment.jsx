// import React, { useState, useEffect } from "react";
// import { useLoaderData, useNavigate } from "react-router-dom";

// const AllEquipment = () => {
//   // const [equipment, setEquipment] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [sortOrder, setSortOrder] = useState("asc");
//   const navigate = useNavigate();
//   // const equipment = useLoaderData();
//   // console.log(equipment,'ffffffffffffffff');
  
//   useEffect(() => {
//     // Fetch all equipment
//     fetch("http://localhost:5000/equipment")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);


 

//   const handleViewDetails = (id) => {
//     // Navigate to the details page
//     navigate(`/equipment/${id}`);
//   };
//     // Handle Sorting
//     const handleSort = () => {
//       const sortedProducts = [...products].sort((a, b) => {
//         return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
//       });
//       setProducts(sortedProducts);
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
//     };

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center mb-6">All Sports Equipment</h1>

//       <div className="flex justify-end mb-4">
//         <button
//           onClick={handleSort}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
//         </button>
//       </div>

//       {/* Equipment Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-gray-700">
//               <th className="border border-gray-300 px-4 py-2">Name</th>
//               <th className="border border-gray-300 px-4 py-2">Category</th>
//               <th className="border border-gray-300 px-4 py-2">Price</th>
//               <th className="border border-gray-300 px-4 py-2">Stock</th>
//               <th className="border border-gray-300 px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((item) => (
//               <tr
//                 key={item._id}
//                 className="hover:bg-gray-100 text-center text-gray-700"
//               >
//                 <td className="border border-gray-300 px-4 py-2">{item.itemName}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {item.categoryName}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">${item.price}</td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {item.stockStatus > 0 ? item.stockStatus : "Out of Stock"}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <button
//                     onClick={() => handleViewDetails(item._id)}
//                     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllEquipment;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllSportsEquipment = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' for ascending, 'desc' for descending
  const [loading, setLoading] = useState(true); // State for loading spinner
  // const [darkMode, setDarkMode] = useState(false); // State for dark/light theme

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all equipment
    fetch("http://localhost:5000/equipment")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Stop loading on error
      });
  }, []);

  // Sort products by price
  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price; // Ascending order
      } else {
        return b.price - a.price; // Descending order
      }
    });
    setProducts(sortedProducts);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div className={``}> 
    {/* // ${darkMode ? "dark" : ""} */}
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        {/* Toggle Theme Button */}
        {/* <div className="flex justify-end p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            Toggle {darkMode ? "Light" : "Dark"} Theme
          </button>
        </div> */}

        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">All Sports Equipment</h1>

          {/* Sort Button */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleSort}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
            </button>
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500"></div>
            </div>
          ) : (
            /* Table */
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Name</th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Category</th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Price</th>
                    <th className="border border-gray-200 dark:border-gray-700 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{product.itemName}</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">{product.categoryName}</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">${product.price}</td>
                      <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">
                        <button
                          onClick={() => navigate(`/equipment/${product._id}`)}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default AllSportsEquipment;

