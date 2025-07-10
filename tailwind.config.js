/**
 * Tailwind CSS Configuration
 *
 * This file configures Tailwind CSS for the portfolio website.
 * It defines which files to scan for classes, enables dark mode,
 * and extends the default theme with custom utilities.
 *
 * Key Configurations:
 * - Dark mode enabled using 'class' strategy for manual toggle
 * - Content paths defined for JavaScript and TypeScript files
 * - Custom theme extensions for gradients and fonts
 * - No additional plugins required for this project
 *
 * @file tailwind.config.js
 * @see https://tailwindcss.com/docs/configuration
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable dark mode using class-based strategy
  // This allows manual control via adding/removing 'dark' class on root element
  // Alternative: 'media' would use system preference automatically
  darkMode: 'class',

  // Define file paths where Tailwind should look for class usage
  // This enables tree-shaking to include only used CSS classes in the final build
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',      // All page files
    './components/**/*.{js,ts,jsx,tsx,mdx}', // All component files
    './app/**/*.{js,ts,jsx,tsx,mdx}',        // Next.js 13+ app directory (future-proofing)
  ],

  // Theme configuration and customizations
  theme: {
    extend: {
      // Custom background image utilities for modern gradient effects
      backgroundImage: {
        // Radial gradient utility - useful for hero sections and spotlight effects
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

        // Conic gradient utility - useful for loading spinners and decorative elements
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      // Custom font family extensions
      fontFamily: {
        // Custom Burton font for decorative text (file located in public/Burtons.otf)
        // Usage: font-burtons in HTML classes
        burtons: "burtons",
      }
    },
  },
  plugins: [],
};