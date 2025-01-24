
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const { user, setUser, logOutUser } = useContext(AuthContext);

  const navigate = useNavigate();


  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logOutUser();

    navigate("/login");
  };




  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo/Website Name */}
        <div className="text-2xl font-bold">
          <Link to="/">SportsEquipment</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-equipment" className="hover:underline">
              All Sports Equipment
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/add-equipment" className="hover:underline">
                  Add Equipment
                </Link>
              </li>
              <li>
                <Link to="/my-equipment" className="hover:underline">
                  My Equipment List
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Conditional Login/Logout */}
        <div className="hidden lg:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL || "https://ibb.co.com/R6jHqJG"}
                alt="User"
                className="w-10 h-10 rounded-full"
                title={user.displayName || "User"}
              />
              <button
                onClick={handleLogout}
                className="bg-red-500 dark:bg-gray-300 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Log Out
              </button>

            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
              >
                Register
              </Link>
            </div>
          )}
        </div>
        <div>

          <div className="form-control">
            <label className="label cursor-pointer">
              {/* <span className="label-text">Remember me</span> */}
              <input type="checkbox" onClick={toggleTheme} className="toggle" defaultChecked />
            </label>
          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden bg-blue-700 dark:bg-gray-900 text-white space-y-2 p-4">
          {
            user && (
              <>
                <img
                  src={user.photoURL || "https://ibb.co.com/R6jHqJG"}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                  title={user.displayName || "User"}
                />
              </>
            )
          }
          <li>
            <Link to="/" className="block hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-equipment" className="block hover:underline">
              All Sports Equipment
            </Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/add-equipment" className="block hover:underline">
                  Add Equipment
                </Link>
              </li>
              <li>
                <Link to="/my-equipment" className="block hover:underline">
                  My Equipment List
                </Link>
              </li>
            </>
          )}
          {user ? (
            <div className="flex flex-col items-start space-y-2">
              <button
                onClick={handleLogout}
                className="bg-red-500 dark:bg-gray-300 hover:bg-red-600 text-white px-3 py-1 rounded-md"
              >
                Log Out
              </button>


            </div>
          ) : (
            <div className="flex flex-col items-start space-y-2">
              <Link
                to="/login"
                className="bg-green-500 dark:bg-gray-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-500 dark:bg-gray-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
              >
                Register
              </Link>

            </div>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

