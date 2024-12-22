
import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddEquipmentPage = () => {
    const { user } = useContext(AuthContext); // Fetch logged-in user details
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        image: "",
        itemName: "",
        categoryName: "",
        description: "",
        price: "",
        rating: "",
        customization: "",
        processingTime: "",
        stockStatus: "",
        userEmail: user?.email || "",
        userName: user?.displayName || "",
    });

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Show loading spinner

        try {
            const response = await fetch("https://assignment-10-server-7oo0pd2sc-sohagtalukder18s-projects.vercel.app/equipment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire("Success", "Equipment added successfully!", "success");
                setFormData({
                    image: "",
                    itemName: "",
                    categoryName: "",
                    description: "",
                    price: "",
                    rating: "",
                    customization: "",
                    processingTime: "",
                    stockStatus: "",
                    userEmail: user?.email || "",
                    userName: user?.displayName || "",
                });
            } else {
                Swal.fire("Error", "Failed to add equipment!", "error");
            }
        } catch (error) {
            Swal.fire("Error", error.message, "error");
        } finally {
            setIsLoading(false); // Hide loading spinner
        }
    };

    return (
        <div >
         

            {/* Main Form Section */}
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
                    <h1 className="text-2xl font-bold mb-6 text-center">Add New Equipment</h1>

                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Image URL */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter image URL"
                                />
                            </div>

                            {/* Item Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Item Name
                                </label>
                                <input
                                    type="text"
                                    name="itemName"
                                    value={formData.itemName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter item name"
                                />
                            </div>

                            {/* Category Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Category Name
                                </label>
                                <input
                                    type="text"
                                    name="categoryName"
                                    value={formData.categoryName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter category name"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter a description"
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter price"
                                />
                            </div>

                            {/* Rating */}
                           

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    name="rating"
                                    value={formData.rating}
                                    onChange={handleChange}
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter rating (1-5)"
                                />
                            </div>

                            {/* Customization */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Customization
                                </label>
                                <input
                                    type="text"
                                    name="customization"
                                    value={formData.customization}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter customization details"
                                />
                            </div>

                            {/* Processing Time */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Processing Time
                                </label>
                                <input
                                    type="text"
                                    name="processingTime"
                                    value={formData.processingTime}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter processing time"
                                />
                            </div>

                            {/* Stock Status */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Stock Status
                                </label>
                                <input
                                    type="number"
                                    name="stockStatus"
                                    value={formData.stockStatus}
                                    onChange={handleChange}
                                    step="0.1"
                                    required
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
                                    placeholder="Enter stock quantity"
                                />
                            </div>

                            {/* User Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    User Email
                                </label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    value={formData.userEmail}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                                />
                            </div>

                            {/* User Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={formData.userName}
                                    readOnly
                                    className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-400"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Add Equipment
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddEquipmentPage;

