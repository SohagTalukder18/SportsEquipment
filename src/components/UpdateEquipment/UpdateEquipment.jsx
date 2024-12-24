

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateEquipment = () => {
  const { id } = useParams(); // Fetch item ID from the URL
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  // const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  useEffect(() => {
    // Fetch the equipment details by ID
    fetch(`https://assignment-10-server-7oo0pd2sc-sohagtalukder18s-projects.vercel.app//equipment/${id}`)
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
    fetch(`https://assignment-1o-server-site.vercel.app/equipment/${id}`, {
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
    <div className={` min-h-screen bg-gray-100 dark:bg-gray-900`}>
      <div className="max-w-xl mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Update Equipment</h1>
         
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

export default UpdateEquipment;


