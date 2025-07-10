/**
 * PostCSS Configuration
 *
 * PostCSS processes CSS and applies transformations using plugins.
 * This configuration is required for Tailwind CSS to work properly
 * and includes essential plugins for cross-browser compatibility.
 *
 * Plugins:
 * - tailwindcss: Processes Tailwind utility classes and generates CSS
 * - autoprefixer: Adds vendor prefixes for cross-browser compatibility
 *
 * PostCSS runs during the build process to:
 * 1. Transform Tailwind directives into actual CSS
 * 2. Add vendor prefixes (-webkit-, -moz-, -ms-) where needed
 * 3. Optimize the final CSS output
 *
 * @file postcss.config.js
 * @see https://postcss.org/
 * @see https://tailwindcss.com/docs/installation/using-postcss
 */

module.exports = {
  plugins: {
    // Tailwind CSS plugin - transforms utility classes into CSS
    // This processes @tailwind directives in your CSS files and
    // generates the final utility classes based on your configuration
    tailwindcss: {},

    // Autoprefixer plugin - adds vendor prefixes for browser compatibility
    // Automatically adds prefixes like -webkit-, -moz-, -ms- to CSS properties
    // that need them for cross-browser support (flexbox, grid, transforms, etc.)
    autoprefixer: {},
  },
}
