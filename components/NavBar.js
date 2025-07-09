"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsList, BsSunFill, BsX } from 'react-icons/bs';

const CustomLink = ({ href, title, className = '', onClick, isMobile = false }) => {
  return (
    <Link
      href={href}
      className={`${className} relative group transition-colors duration-200 ${isMobile ? 'touch-target' : ''}`}
      onClick={onClick}
    >
      {title}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

const NavBar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/projects", title: "Projects" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 text-black dark:text-white flex items-center justify-between sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item, index) => (
          <CustomLink
            key={index}
            href={item.href}
            title={item.title}
            className="text-sm lg:text-base font-medium hover:text-blue-600 dark:hover:text-blue-400"
          />
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 touch-target"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? (
          <BsX className="text-2xl" />
        ) : (
          <BsList className="text-2xl" />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 md:hidden"
          >
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item, index) => (
                <CustomLink
                  key={index}
                  href={item.href}
                  title={item.title}
                  className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 py-2"
                  onClick={closeMenu}
                  isMobile={true}
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Mode Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 touch-target"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <BsSunFill className="text-yellow-500 text-lg sm:text-xl" />
        ) : (
          <BsFillMoonStarsFill className="text-gray-600 text-lg sm:text-xl" />
        )}
      </motion.button>
    </motion.header>
  );
};

export default NavBar;