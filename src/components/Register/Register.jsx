import React, { useContext, useState } from "react";
// import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useNavigate } from 'react-router-dom';

const RegisterPage = () => {


  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // const Navigate = useNavigate()
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   photoURL: "",
  //   password: "",
  // });

  // const auth = getAuth();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  //   return regex.test(password);
  // };

  const handleRegister = (e) => {
    e.preventDefault();


    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    console.log(displayName, displayName);


    createUser(email, password)
      .then(result => {
        console.log(result.user)
        const newUser = { displayName, email, photoURL }

        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            Swal.fire("Success", "Registration successful!", "success");
            navigate("/login");
            console.log(data);

          })

      })
      .catch(error => {
        console.log("error", error);

      })

    // console.log("Register",email, password);

    // const { name, email, photoURL, password } = formData;

    // if (!validatePassword(password)) {
    //   Swal.fire("Error", "Password must contain uppercase, lowercase letters and be at least 6 characters long.", "error");
    //   return;
    // }

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   const user = userCredential.user;

    //   // Update user profile
    //   await updateProfile(user, { displayName: name, photoURL });

    //   // Store user in MongoDB
    //   const userData = { name, email, photoURL };
    //   await fetch("http://localhost:5000/addUser", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(userData),
    //   });

    //   Swal.fire("Success", "Registration successful!", "success");
    // } catch (error) {
    //   Swal.fire("Error", error.message, "error");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              // value={formData.name}
              // onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>
          {/* PhotoURL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              // value={formData.photoURL}
              // onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter photo URL"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
