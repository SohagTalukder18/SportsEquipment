import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Website Name */}
          <div>
            <h2 className="text-lg font-bold">SportsZone</h2>
            <p className="mt-2 text-gray-400">
              Your one-stop destination for premium sports equipment.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="mt-2 text-gray-400">
              Email: support@sportszone.com
              <br />
              Phone: +1-800-SPORTS
              <br />
              Address: 123 Sports Avenue, New York, NY
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SportsZone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
