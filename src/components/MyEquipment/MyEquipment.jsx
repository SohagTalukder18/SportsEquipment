import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      console.log("User Email:", user.email); // Access the email property
    }
  }, [user]);
  
  const [myEquipment, setMyEquipment] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  console.log(user.email,'sssssssssssss');
  // {user.map(u=>)}
  

  useEffect(() => {
    // Fetch equipment added by the logged-in user
    fetch(`http://localhost:5000/myEquipment?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyEquipment(data))
      .catch((error) => console.error("Error fetching equipment:", error));
  }, [user.email]);

  const handleDelete = (id) => {
    // console.log(id,"ttttttttttttttttt");
    
    fetch(`http://localhost:5000/equipment/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setMyEquipment(myEquipment.filter((item) => item._id !== id));
          alert("Equipment deleted successfully!");
        }
      });
  };
  const handleUpdateEquipment=(id)=>{
    navigate(`/equipment/update/${id}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Equipment List</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {myEquipment.map((item) => (
            <div
              key={item._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.itemName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.itemName}</h2>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Category:</span>{" "}
                  {item.categoryName}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Price:</span> ${item.price}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Stock:</span>{" "}
                  {item.stockStatus}
                </p>
              </div>
              <div className="flex justify-between p-4">
                <button
                  // onClick={() => navigate(`/update-equipment/${item._id}`)}
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
  );
};

export default MyEquipmentList;
