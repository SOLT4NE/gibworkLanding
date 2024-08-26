import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="  text-white">
     
      <div className="relative pt-24 pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">GIB.WORK</h3>
            <p className="text-purple-200">Connecting talent with opportunities in the decentralized future.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
            <p className="mb-4 text-purple-200">Stay updated with the latest in Web3 jobs</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-purple-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-purple-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 mb-4 md:mb-0">&copy; 2024 SOLT4NE LABS. All rights reserved.</p>
            <div className="flex space-x-4">
              {/* <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Facebook className="text-purple-300 hover:text-white transition-colors" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Twitter className="text-purple-300 hover:text-white transition-colors" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <LinkedIn className="text-purple-300 hover:text-white transition-colors" />
              </motion.a>
              <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Instagram className="text-purple-300 hover:text-white transition-colors" />
              </motion.a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;