// import Swal from 'sweetalert2'


// export default function AddEquipment({ user }) {
//     // const [formData, setFormData] = useState({
//     //     image: "",
//     //     itemName: "",
//     //     categoryName: "",
//     //     description: "",
//     //     price: "",
//     //     rating: "",
//     //     customization: "",
//     //     processingTime: "",
//     //     stockStatus: "",
//     //     userEmail: user.email, // Read-only
//     //     userName: user.name,   // Read-only
//     // });

//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setFormData({ ...formData, [name]: value });
//     // };

//     const handleSubmit =  (e) => {
//         e.preventDefault();

//         const form = e.target;

//         const image = form.image.value;
//         const itemName = form.itemName.value;
//         const categoryName = form.categoryName.value;
//         const description = form.description.value;
//         const price = form.price.value;
//         const rating = form.rating.value;
//         const customization = form.customization.value;
//         const processingTime = form.processingTime.value;
//         const stockStatus = form.stockStatus.value;

//         const newEquipment={image,itemName, categoryName, description, price , rating, customization, processingTime, stockStatus}
//         console.log(newEquipment);
        

//         fetch(`http://localhost:5000/equipment`,{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(newEquipment)
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if(data.insertedId){
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'User Added Successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Cool'
//                   })
//             }
            
//         })
//         // try {
//         //     const response = await axios.post("https://your-backend-url.com/equipment", formData);
//         //     if (response.status === 200) {
//         //         alert("Equipment added successfully!");
//         //         setFormData({
//         //             image: "",
//         //             itemName: "",
//         //             categoryName: "",
//         //             description: "",
//         //             price: "",
//         //             rating: "",
//         //             customization: "",
//         //             processingTime: "",
//         //             stockStatus: "",
//         //             userEmail: user.email,
//         //             userName: user.name,
//         //         });
//         //     }
//         // } catch (error) {
//         //     alert("Failed to add equipment. Please try again.");
//         // }
//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//             <h1 className="text-2xl font-bold mb-4 text-center">Add New Equipment</h1>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 {/* Image URL */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Image URL</label>
//                     <input
//                         type="text"
//                         name="image"
                       
//                         placeholder="Enter image URL"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Item Name */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Item Name</label>
//                     <input
//                         type="text"
//                         name="itemName"
                       
//                         placeholder="Enter item name"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Category Name */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Category Name</label>
//                     <input
//                         type="text"
//                         name="categoryName"
                     
//                         placeholder="Enter category name"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Description */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Description</label>
//                     <textarea
//                         name="description"
                      
//                         placeholder="Enter description"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Price */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Price</label>
//                     <input
//                         type="number"
//                         name="price"
                       
//                         placeholder="Enter price"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Rating */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Rating</label>
//                     <input
//                         type="number"
//                         name="rating"
                     
//                         placeholder="Enter rating (e.g., 4.5)"
//                         step="0.1"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Customization */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Customization</label>
//                     <input
//                         type="text"
//                         name="customization"
                       
//                         placeholder="Enter customization details"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Processing Time */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Processing Time</label>
//                     <input
//                         type="text"
//                         name="processingTime"
                        
//                         placeholder="Enter processing/delivery time"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* Stock Status */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">Stock Status</label>
//                     <input
//                         type="number"
//                         name="stockStatus"
                      
//                         placeholder="Enter available stock quantity"
//                         className="w-full p-2 border border-gray-300 rounded-md"
//                     />
//                 </div>

//                 {/* User Email (Read-Only) */}
//                 {/* <div>
//                     <label className="block text-sm font-medium text-gray-700">User Email</label>
//                     <input
//                         type="email"
//                         name="userEmail"
//                         value={formData.userEmail}
//                         readOnly
//                         className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//                     />
//                 </div>

//                 User Name (Read-Only)
//                 <div>
//                     <label className="block text-sm font-medium text-gray-700">User Name</label>
//                     <input
//                         type="text"
//                         name="userName"
//                         value={formData.userName}
//                         readOnly
//                         className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
//                     />
//                 </div> */}

//                 {/* Submit Button */}
//                 {/* <div className="text-center">
//                     <button
//                         type="submit"
//                         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                     >
//                         Add Equipment
//                     </button>
//                 </div> */}

//                 <input type="submit" value='Add Equipment' className="btn btn-block"/>
//             </form>
//         </div>
//     );
// };

// // export default AddEquipmentForm;

import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthProvider"; // Assuming AuthProvider manages logged-in user state
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddEquipmentPage = () => {
  const { user } = useContext(AuthContext); // Fetch logged-in user details
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
  console.log(user);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/equipment", {
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
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Equipment</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter image URL"
            />
          </div>
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter item name"
            />
          </div>
          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Category Name</label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter category name"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter a description"
            />
          </div>
          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter price"
            />
          </div>
          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              min="1"
              max="5"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter rating (1-5)"
            />
          </div>
          {/* Customization */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Customization</label>
            <input
              type="text"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter customization details"
            />
          </div>
          {/* Processing Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Processing Time</label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter processing time"
            />
          </div>
          {/* Stock Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock Status</label>
            <input
              type="number"
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter stock quantity"
            />
          </div>
          {/* User Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">User Email</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              readOnly
              className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md"
            />
          </div>
          {/* User Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              readOnly
              className="w-full p-2 border border-gray-300 bg-gray-100 rounded-md"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEquipmentPage;

