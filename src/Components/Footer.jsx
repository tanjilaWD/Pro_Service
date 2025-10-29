

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-50 to-blue-50 py-10 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Let’s Build Something Great
        </h3>
        <p className="text-gray-600 mb-6">
          Feel free to connect with me on social media or send a message anytime.
        </p>

        <div className="flex justify-center gap-5 mb-6">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            <FaFacebookF className="size-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white text-pink-500 rounded-full shadow hover:bg-pink-500 hover:text-white transition-all"
          >
            <FaInstagram className="size-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-700 rounded-full shadow hover:bg-blue-700 hover:text-white transition-all"
          >
            <FaLinkedinIn className="size-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center bg-white text-gray-800 rounded-full shadow hover:bg-gray-800 hover:text-white transition-all"
          >
            <FaGithub className="size-5" />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} xyz. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
