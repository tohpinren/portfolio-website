/**
 * Footer Component
 *
 * Simple, elegant footer displayed at the bottom of every page.
 * Provides copyright information and maintains visual consistency
 * across the entire portfolio website.
 *
 * Design Features:
 * - Minimal, clean design that doesn't distract from main content
 * - Subtle backdrop blur effect for modern glass morphism aesthetic
 * - Smooth fade-in animation on page load
 * - Responsive typography and spacing
 * - Consistent theming with dark/light mode support
 *
 * @file components/Footer.js
 * @author Pin Ren Toh
 */

import { motion } from 'framer-motion';

/**
 * Footer Component
 *
 * Renders a minimalist footer with copyright information.
 * Uses Framer Motion for subtle entrance animation and maintains
 * consistency with the overall site design language.
 *
 * Styling Features:
 * - Border top for visual separation from main content
 * - Backdrop blur for modern glass effect
 * - Responsive padding that adapts to screen size
 * - Centered content alignment for balanced appearance
 *
 * @returns {JSX.Element} Animated footer with copyright information
 */
const Footer = () => {
  return (
    <motion.footer
      // Subtle fade-in animation when footer comes into view
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // Glass morphism styling with backdrop blur and translucent background
      className="py-2 sm:py-3 border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 backdrop-blur-sm"
    >
      {/* Container with responsive margin matching site-wide styling */}
      <div className="container-mobile">
        {/* Centered content layout */}
        <div className="flex flex-col items-center justify-center">
          {/* Copyright text with responsive typography and muted styling */}
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium text-center">
            © 2025 Pin Ren Toh
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;