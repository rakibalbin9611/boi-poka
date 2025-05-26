import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and About */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            BookWorld
          </h2>
          <p className="text-sm">
            Discover, read, and explore your favorite books. Dive into the world
            of knowledge with us.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            Subscribe
          </h3>
          <p className="text-sm mb-3">
            Get the latest updates and book recommendations.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t dark:border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} BookWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
