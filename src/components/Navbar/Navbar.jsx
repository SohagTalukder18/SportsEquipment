
// import React, { useContext, useState } from "react";
// // import { Link } from "react-router-dom";
// // import { AuthContext } from "../../Providers/AuthProvider";

// // import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const {logInUser} = useContext(AuthContext);
//   // const {user}=useContext(AuthContext);
//   // console.log(user,'user');

//   const {user, setUser, logOutUser}=useContext(AuthContext);
//   // console.log(user,"uuuuuuuuuuuuuuuuuuu");
  
//   const navigate = useNavigate();
//   // console.log(user);
  
//   const handleLogout = () => {
//     logOutUser();
//     // setUser(null); // Clear user data
//     navigate("/login"); // Redirect to login
//   };


  

//   return (
//     <nav className="bg-blue-600 text-white shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo/Website Name */}
//         <div className="text-2xl font-bold">
//           <Link to="/">SportsGear</Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex space-x-6">
//           <li>
//             <Link to="/" className="hover:underline">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/all-equipment" className="hover:underline">
//               All Sports Equipment
//             </Link>
//           </li>
//           {user && (
//             <>
//               <li>
//                 <Link to="/add-equipment" className="hover:underline">
//                   Add Equipment
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/my-equipment" className="hover:underline">
//                   My Equipment List
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Conditional Login/Logout */}
//         <div className="hidden lg:flex items-center space-x-4">
//           {user ? (
//             <div className="flex items-center space-x-4">
//               <img
//                 src={user.photoURL || "/default-profile.png"}
//                 alt="User"
//                 className="w-10 h-10 rounded-full"
//                 title={user.displayName || "User"}
//               />
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
//               >
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex space-x-4">
//               <Link
//                 to="/login"
//                 className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <ul className="lg:hidden bg-blue-700 text-white space-y-2 p-4">
//           <li>
//             <Link to="/" className="block hover:underline">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/all-equipment" className="block hover:underline">
//               All Sports Equipment
//             </Link>
//           </li>
//           {user && (
//             <>
//               <li>
//                 <Link to="/add-equipment" className="block hover:underline">
//                   Add Equipment
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/my-equipment" className="block hover:underline">
//                   My Equipment List
//                 </Link>
//               </li>
//             </>
//           )}
//           {user ? (
//             <div className="flex flex-col items-start space-y-2">
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md"
//               >
//                 Log Out
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-col items-start space-y-2">
//               <Link
//                 to="/login"
//                 className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// // import React, { useContext } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { AuthContext } from "../../Providers/AuthProvider";
// // // import { AuthContext } from "../../Providers/AuthProvider";

// // const Navbar = () => {
// //   // const { user, setUser } = useContext(AuthContext); // Access user data and logout function
// //   const {user, setUser}=useContext(AuthContext)
// //   const navigate = useNavigate();
// //   console.log(user);
  
// //   const handleLogout = () => {
// //     // setUser(null); // Clear user data
// //     navigate("/login"); // Redirect to login
// //   };

// //   return (
// //     <nav className="bg-blue-600 p-4 text-white">
// //       <div className="container mx-auto flex items-center justify-between">
// //         {/* Website Logo/Name */}
// //         <Link to="/" className="text-xl font-bold hover:text-gray-200">
// //           SportsZone
// //         </Link>

// //         {/* Navigation Links */}
// //         <div className="flex space-x-4">
// //           <Link to="/" className="hover:text-gray-200">
// //             Home
// //           </Link>
// //           <Link to="/all-sports-equipment" className="hover:text-gray-200">
// //             All Sports Equipment
// //           </Link>
// //           {user && (
// //             <>
// //               <Link to="/add-equipment" className="hover:text-gray-200">
// //                 Add Equipment
// //               </Link>
// //               <Link to="/my-equipment-list" className="hover:text-gray-200">
// //                 My Equipment List
// //               </Link>
// //             </>
// //           )}
// //         </div>

// //         {/* User Authentication Controls */}
// //         <div className="flex items-center space-x-4">
// //           {user ? (
// //             <div className="relative group">
// //               {/* User Avatar */}
// //               {user.photoURL ? (
// //                 <img
// //                   src={user.photoURL}
// //                   alt={user.displayName || "User"}
// //                   className="w-10 h-10 rounded-full border-2 border-white"
// //                 />
// //               ) : (
// //                 <div className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-xl font-bold uppercase">
// //                   {user.displayName?.charAt(0) || "U"}
// //                 </div>
// //               )}

// //               {/* Hover Details */}
// //               <div className="absolute left-0 mt-2 p-2 bg-white text-gray-800 rounded shadow-lg hidden group-hover:block">
// //                 <p className="font-bold">{user.displayName || "User"}</p>
// //                 <button
// //                   onClick={handleLogout}
// //                   className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
// //                 >
// //                   Log Out
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <>
// //               <Link to="/login" className="hover:text-gray-200">
// //                 Login
// //               </Link>
// //               <Link to="/register" className="hover:text-gray-200">
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

