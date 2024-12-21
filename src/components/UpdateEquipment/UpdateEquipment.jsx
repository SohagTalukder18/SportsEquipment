// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const UpdateEquipment = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     image: "",
//     itemName: "",
//     categoryName: "",
//     description: "",
//     price: "",
//     stockStatus: "",
//   });

//   useEffect(() => {
//     // Fetch existing equipment data
//     fetch(`http://localhost:5000/equipment/${id}`)
//       .then((res) => res.json())
//       .then((data) => setFormData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`http://localhost:5000/equipment/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Equipment updated successfully!");
//         navigate("/my-equipment");
//       } else {
//         console.error("Error updating equipment:", response.statusText);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-bold mb-4 text-center">Update Equipment</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Item Name</label>
//           <input
//             type="text"
//             name="itemName"
//             value={formData.itemName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Category</label>
//           <input
//             type="text"
//             name="categoryName"
//             value={formData.categoryName}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Price</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Stock Status</label>
//           <input
//             type="number"
//             name="stockStatus"
//             value={formData.stockStatus}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Update Equipment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateEquipment;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Swal from "sweetalert2";

// const UpdateEquipment = () => {
//   const { id } = useParams(); // Fetch item ID from the URL
//   const navigate = useNavigate();
//   const [equipment, setEquipment] = useState(null);

//   useEffect(() => {
//     // Fetch the equipment details by ID
//     fetch(`http://localhost:5000/equipment/${id}`)
//       .then((res) => res.json())
//       .then((data) => setEquipment(data))
//       .catch((error) => console.error("Error fetching equipment:", error));
//   }, [id]);

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     const updatedEquipment = {
//       image: e.target.image.value,
//       itemName: e.target.itemName.value,
//       categoryName: e.target.categoryName.value,
//       description: e.target.description.value,
//       price: e.target.price.value,
//       rating: e.target.rating.value,
//       customization: e.target.customization.value,
//       processingTime: e.target.processingTime.value,
//       stockStatus: e.target.stockStatus.value,
//     };

//     // Send updated data to the server
//     fetch(`http://localhost:5000/equipment/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedEquipment),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           Swal.fire("Success", "Equipment updated successfully!", "success");
//           navigate("/"); // Redirect to homepage or another page
//         } else {
//           Swal.fire("Error", "No changes were made.", "error");
//         }
//       })
//       .catch((error) => console.error("Error updating equipment:", error));
//   };

//   if (!equipment) {
//     return <div>Loading...</div>; // Show loading while fetching
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-xl bg-white p-8 shadow-lg rounded-lg">
//         <h1 className="text-2xl font-bold mb-6 text-center">Update Equipment</h1>

//         <form onSubmit={handleUpdate} className="space-y-4">
//           {/* Image */}

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Image URL</label>
//             <input
//               type="text"
//               name="image"
//               defaultValue={equipment.image}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"

//             />
//           </div>
//           {/* Item Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Item Name</label>
//             <input
//               type="text"
//               name="itemName"
//               defaultValue={equipment.itemName}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Category Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category Name</label>
//             <input
//               type="text"
//               name="categoryName"
//               defaultValue={equipment.categoryName}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Description */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               defaultValue={equipment.description}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Price */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Price</label>
//             <input
//               type="number"
//               name="price"
//               defaultValue={equipment.price}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Rating */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Rating</label>
//             <input
//               type="number"
//               step="0.1"
//               name="rating"
//               defaultValue={equipment.rating}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Customization */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Customization</label>
//             <input
//               type="text"
//               name="customization"
//               defaultValue={equipment.customization}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Processing Time */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Processing Time</label>
//             <input
//               type="text"
//               name="processingTime"
//               defaultValue={equipment.processingTime}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* Stock Status */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Stock Status</label>
//             <input
//               type="number"
//               name="stockStatus"
//               defaultValue={equipment.stockStatus}
//               required
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//           </div>
//           {/* User Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User Email</label>
//             <input
//               type="email"
//               name="userEmail"
//               value={equipment.userEmail}
//               readOnly
//               className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//             />
//           </div>
//           {/* User Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">User Name</label>
//             <input
//               type="text"
//               name="userName"
//               value={equipment.userName}
//               readOnly
//               className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Update
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateEquipment;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { id } = useParams(); // Fetch item ID from the URL
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  useEffect(() => {
    // Fetch the equipment details by ID
    fetch(`http://localhost:5000/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEquipment = {
      image: e.target.image.value,
      itemName: e.target.itemName.value,
      categoryName: e.target.categoryName.value,
      description: e.target.description.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      customization: e.target.customization.value,
      processingTime: e.target.processingTime.value,
      stockStatus: e.target.stockStatus.value,
      userEmail: e.target.userEmail.value,
      userName: e.target.userName.value,
    };

    // Send updated data to the server
    fetch(`http://localhost:5000/equipment/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Success", "Equipment updated successfully!", "success");
          navigate("/"); // Redirect to homepage or another page
        } else {
          Swal.fire("Error", "No changes were made.", "error");
        }
      })
      .catch((error) => console.error("Error updating equipment:", error));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!equipment) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDarkMode ? "dark" : ""
        } bg-gray-100 dark:bg-gray-900`}
      >
        <span className="loading loading-spinner loading-lg text-blue-600 dark:text-yellow-500"></span>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900`}>
      <div className="max-w-xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Update Equipment</h1>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-blue-600 dark:bg-yellow-500 text-white dark:text-black rounded-lg"
          >
            Toggle Theme
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
              <input
                type="text"
                name="image"
                defaultValue={equipment.image}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Item Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Item Name</label>
              <input
                type="text"
                name="itemName"
                defaultValue={equipment.itemName}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Category Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category Name</label>
              <input
                type="text"
                name="categoryName"
                defaultValue={equipment.categoryName}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <textarea
                name="description"
                defaultValue={equipment.description}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
              <input
                type="number"
                name="price"
                step="0.1"
                defaultValue={equipment.price}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
              <input
                type="number"
                step="0.1"
                name="rating"
                defaultValue={equipment.rating}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Customization */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Customization</label>
              <input
                type="text"
                name="customization"
                defaultValue={equipment.customization}
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Processing Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                defaultValue={equipment.processingTime}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Stock Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Stock Status</label>
              <input
                type="number"
                name="stockStatus"
                defaultValue={equipment.stockStatus}
                required
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* User Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Email</label>
              <input
                type="email"
                name="userEmail"
                value={equipment.userEmail}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">User Name</label>
              <input
                type="text"
                name="userName"
                value={equipment.userName}
                readOnly
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-600"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;


