

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSlider.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();

  // Fetch limited products
  useEffect(() => {
    fetch("https://assignment-1o-server-site.vercel.app/equipment?limit=6")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  
  

  return (
    <div>


      {/* Banner/Slider */}
      <section className="w-full overflow-hidden relative">
        <div className="slider h-[500px]">
          {/* Slide 1 */}
          <div
            className="slide flex justify-center items-center text-white h-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/nkGsDw6/images.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              // height:'500px'
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
              <h1 className="text-4xl font-bold mb-2">Welcome to Sports World</h1>
              <p className="text-lg">Your one-stop shop for premium sports equipment.</p>
            </div>
          </div>
          {/* Slide 2 */}
          <div
            className="slide flex justify-center items-center text-white h-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/zG5VJfB/istockphoto-1136317339-612x612.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
              <h1 className="text-4xl font-bold mb-2">Gear Up for Success</h1>
              <p className="text-lg">Top-quality equipment trusted by professionals.</p>
            </div>
          </div>
          {/* Slide 3 */}
          <div
            className="slide flex justify-center items-center text-white h-full"
            style={{
              backgroundImage: "url('https://i.ibb.co.com/nkGsDw6/images.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
              <h1 className="text-4xl font-bold mb-2">Play Your Best Game</h1>
              <p className="text-lg">Discover equipment tailored to your needs.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Product Section */}
      <section className=" p-6 bg-gray-100 dark:bg-gray-800 dark:text-white ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white dark:bg-gray-700 dark:text-white shadow-md rounded-lg p-4 flex flex-col justify-between"
              >

                <div className="w-96 h-48 bg-white">
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="w-full h-full  rounded-md "
                  /></div>
                <h3 className="text-lg font-bold mt-4">{product.itemName}</h3>
                <p className="text-gray-500">Category: {product.categoryName}</p>
                <p className="text-gray-500">Price: ${product.price}</p>
                <button
                  onClick={() => navigate(`/equipment/${product._id}`)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Categories Section */}
      <section className="bg-gray-100 dark:bg-gray-800 dark:text-white py-12">
        <div className="max-w-7xl mx-auto p-6">
          <h2 className="text-3xl font-bold text-center mb-6">Sports Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Cricket", "Football", "Tennis", "Basketball"].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  {category[0]}
                </div>
                <h3 className="text-lg font-bold mt-4">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Section: Why Choose Us */}
      <section className="bg-white dark:bg-gray-700 dark:text-white py-12">
        <div className="max-w-7xl mx-auto p-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We provide high-quality sports equipment tailored to your needs. Our products are trusted
            by professionals and enthusiasts alike.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border dark:border-gray-500 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-500 dark:text-gray-300">
                We ensure all our equipment meets international standards.
              </p>
            </div>
            <div className="p-4 border dark:border-gray-500 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Affordable Prices</h3>
              <p className="text-gray-500 dark:text-gray-300">
                Get the best value for your money with competitive pricing.
              </p>
            </div>
            <div className="p-4 border dark:border-gray-500 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-gray-500 dark:text-gray-300">
                We offer quick and reliable delivery services worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

