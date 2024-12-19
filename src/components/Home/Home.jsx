// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./HomeSlider.css"

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch six limited products
//     fetch("http://localhost:5000/equipment?limit=6")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);
  
  

//   return (
//     <div>
//       {/* Navbar */}
     

//       {/* Banner/Slider */}
//       <section className="w-full h-[400px] overflow-hidden relative">
//         <div className="slider">
//           <div className="slide bg-blue-500 flex justify-center items-center text-white h-full">
//             <h1 className="text-4xl font-bold">Welcome to Sports World</h1>
//           </div>
//           <div className="slide bg-green-500 flex justify-center items-center text-white h-full">
//             <h1 className="text-4xl font-bold">Explore Top Sports Equipment</h1>
//           </div>
//           <div className="slide bg-red-500 flex justify-center items-center text-white h-full">
//             <h1 className="text-4xl font-bold">Gear Up for Your Next Game</h1>
//           </div>
//         </div>
//       </section>

//       {/* Product Section */}
//       <section className="max-w-7xl mx-auto p-6">
//         <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between"
//             >
//               <img
//                 src={product.image}
//                 alt={product.itemName}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-bold mt-4">{product.itemName}</h3>
//               <p className="text-gray-500">Category: {product.categoryName}</p>
//               <p className="text-gray-500">Price: ${product.price}</p>
              
//               <button
//                 onClick={() => navigate(`/equipment/${product._id}`)}
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 View Details
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Sports Categories Section */}
//       <section className="bg-gray-100 py-12">
//         <div className="max-w-7xl mx-auto p-6">
//           <h2 className="text-3xl font-bold text-center mb-6">Sports Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {["Cricket", "Football", "Tennis", "Basketball"].map((category, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
//               >
//                 <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
//                   {category[0]}
//                 </div>
//                 <h3 className="text-lg font-bold mt-4">{category}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Additional Section: Why Choose Us */}
//       <section className="bg-white py-12">
//         <div className="max-w-7xl mx-auto p-6 text-center">
//           <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
//           <p className="text-gray-600 mb-6">
//             We provide high-quality sports equipment tailored to your needs. Our products are trusted
//             by professionals and enthusiasts alike.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="p-4 border rounded-lg">
//               <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
//               <p className="text-gray-500">
//                 We ensure all our equipment meets international standards.
//               </p>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
//               <p className="text-gray-500">Get the best value for your money with competitive pricing.</p>
//             </div>
//             <div className="p-4 border rounded-lg">
//               <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
//               <p className="text-gray-500">We offer quick and reliable delivery services worldwide.</p>
//             </div>
//           </div>
//         </div>
//       </section>

     
//     </div>
//   );
// };

// export default Home;
