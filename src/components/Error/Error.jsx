
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h1 className="text-6xl font-bold mb-4 ">404</h1>
      <p className="text-xl mb-6 text-center">Oops! The page you're looking for doesn't exist.</p>
      {/* <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Go Back Home
      </Link> */}
    </div>
  );
};

export default Error;

