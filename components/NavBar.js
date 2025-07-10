/**
 * Navigation Bar Component
 *
 * Responsive navigation header with dark mode toggle and mobile menu functionality.
 * Provides consistent navigation across all pages with smooth animations and
 * accessibility features.
 *
 * Key Features:
 * - Responsive design with desktop/mobile layouts
 * - Animated mobile menu with slide-in/out effects
 * - Dark mode toggle with visual state indicators
 * - Sticky positioning for persistent access
 * - Accessibility support with ARIA labels
 * - Touch-friendly button sizing
 *
 * Components:
 * - CustomLink: Reusable navigation link with hover effects
 * - Desktop navigation: Horizontal layout for larger screens
 * - Mobile menu: Collapsible vertical layout for smaller screens
 * - Dark mode toggle: Theme switching functionality
 *
 * @file components/NavBar.js
 * @author Pin Ren Toh
 */

"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillMoonStarsFill, BsList, BsSunFill, BsX } from 'react-icons/bs';

/**
 * CustomLink Component
 *
 * Reusable navigation link component with consistent styling and hover effects.
 * Features an animated underline that expands on hover for visual feedback.
 *
 * @param {Object} props - Component props
 * @param {string} props.href - URL destination for the link
 * @param {string} props.title - Display text for the link
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {function} [props.onClick] - Click handler function (used for mobile menu closing)
 * @param {boolean} [props.isMobile=false] - Whether this link is in the mobile menu
 * @returns {JSX.Element} Styled navigation link with hover effects
 *
 * @example
 * <CustomLink href="/about" title="About" onClick={closeMenu} isMobile={true} />
 */
const CustomLink = ({ href, title, className = '', onClick, isMobile = false }) => {
  return (
    <Link
      href={href}
      // Conditional styling for mobile vs desktop, plus touch target class for accessibility
      className={`${className} relative group transition-colors duration-200 ${isMobile ? 'touch-target' : ''}`}
      onClick={onClick}
    >
      {title}
      {/* Animated underline effect that expands on hover */}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

/**
 * NavBar Component
 *
 * Main navigation component that adapts between desktop and mobile layouts.
 * Manages mobile menu state and integrates dark mode toggle functionality.
 *
 * State Management:
 * - isMenuOpen: Controls mobile menu visibility
 * - darkMode: Received via props from PageLayout
 *
 * Responsive Behavior:
 * - Desktop (md+): Horizontal navigation with all links visible
 * - Mobile (<md): Hamburger menu with collapsible navigation
 *
 * @param {Object} props - Component props
 * @param {boolean} props.darkMode - Current dark mode state
 * @param {function} props.setDarkMode - Function to toggle dark mode state
 * @returns {JSX.Element} Complete navigation header with responsive behavior
 */
const NavBar = ({ darkMode, setDarkMode }) => {
  // State for controlling mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggle mobile menu open/closed state
   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Close mobile menu (used when user clicks a navigation link)
   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navigation items configuration - centralized for easy maintenance
  const navItems = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/projects", title: "Projects" }
  ];

  return (
    <motion.header
      // Animate in from top when component mounts
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Sticky positioning with backdrop blur for modern glass effect
      className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-4 sm:py-6 text-black dark:text-white flex items-center justify-between sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800"
    >

      {/* Desktop Navigation - hidden on mobile */}
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

      {/* Mobile Menu Button - only visible on mobile */}
      <button
        className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 touch-target"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu" // Accessibility label
      >
        {/* Toggle between hamburger and X icon based on menu state */}
        {isMenuOpen ? (
          <BsX className="text-2xl" />
        ) : (
          <BsList className="text-2xl" />
        )}
      </button>

      {/* Mobile Navigation Menu - animated slide-in/out */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // Smooth slide-in animation from top
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            // Positioned absolutely below the header with backdrop blur
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 md:hidden"
          >
            {/* Mobile navigation links in vertical layout */}
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item, index) => (
                <CustomLink
                  key={index}
                  href={item.href}
                  title={item.title}
                  className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 py-2"
                  onClick={closeMenu} // Close menu when link is clicked
                  isMobile={true} // Enable mobile-specific styling
                />
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dark Mode Toggle Button */}
      <motion.button
        // Interactive animations for better user feedback
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 touch-target"
        aria-label="Toggle dark mode" // Accessibility label
      >
        {/* Dynamic icon based on current theme */}
        {darkMode ? (
          // Sun icon for dark mode (indicates "switch to light")
          <BsSunFill className="text-yellow-500 text-lg sm:text-xl" />
        ) : (
          // Moon icon for light mode (indicates "switch to dark")
          <BsFillMoonStarsFill className="text-gray-600 text-lg sm:text-xl" />
        )}
      </motion.button>
    </motion.header>
  );
};

export default NavBar;