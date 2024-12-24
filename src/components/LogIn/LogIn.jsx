import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // const auth = getAuth();
  // const googleProvider = new GoogleAuthProvider();
  const { logInUser} = useContext(AuthContext);



  const handleLogin = (e) => {
    e.preventDefault();


    const email = e.target.email.value;
    setEmail(email);
    const password = e.target.password.value;
    setPassword(password);




    logInUser(email, password)
      .then(result => {

        
        Swal.fire("Success", "Login successful!", "success");
        navigate("/");

      })
      .catch(error => {
        
        Swal.fire("Error", error.message, "error");

      })

  
  };

  // const handleGoogleLogin = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;

  //     // Store user in MongoDB
  //     const userData = {
  //       name: user.displayName,
  //       email: user.email,
  //       photoURL: user.photoURL,
  //     };
  //     await fetch("https://assignment-1o-server-site.vercel.app/addUser", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(userData),
  //     });

  //     Swal.fire("Success", "Google Login successful!", "success");
  //     navigate("/");
  //   } catch (error) {
  //     Swal.fire("Error", error.message, "error");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg dark:bg-gray-800 dark:text-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 dark:bg-gray-500 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        {/* <div className="my-4 text-center text-gray-600">or</div> */}
        {/* <button
          onClick={handleGoogleLogin}
          className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Login with Google
        </button> */}
        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
