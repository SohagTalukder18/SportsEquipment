

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [myEquipment, setMyEquipment] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Spinner state
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  

  useEffect(() => {
    if (user) {
      console.log("User Email:", user.email); // Access the email property
    }
  }, [user]);

  useEffect(() => {
    // Fetch equipment added by the logged-in user
    fetch(`http://localhost:5000/myEquipment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyEquipment(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching equipment:", error);
        setIsLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipment/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your equipment has been deleted.", "success");
              setMyEquipment((prev) => prev.filter((item) => item._id !== id));
            }
          })
          .catch((error) => console.error("Error deleting equipment:", error));
      }
    });
  };

  const handleUpdateEquipment = (id) => {
    navigate(`/equipment/update/${id}`);
  };

  
  return (
    <div className={`min-h-screen`}>
      
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">My Equipment List</h1>
           
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500"></div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {myEquipment.map((item) => (
                <div
                  key={item._id}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.itemName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{item.itemName}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      <span className="font-semibold">Category:</span>{" "}
                      {item.categoryName}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">
                      <span className="font-semibold">Price:</span> ${item.price}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Stock:</span>{" "}
                      {item.stockStatus}
                    </p>
                  </div>
                  <div className="flex justify-between p-4">
                    <button
                      onClick={() => handleUpdateEquipment(item._id)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setDeleteConfirmation(item._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {deleteConfirmation && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">
                  Are you sure you want to delete this equipment?
                </h2>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setDeleteConfirmation(null)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(deleteConfirmation);
                      setDeleteConfirmation(null);
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentList;

