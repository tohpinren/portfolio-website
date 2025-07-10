/**
 * SocialLinks Component
 *
 * Reusable component for displaying social media and contact links.
 * Provides a consistent way to showcase social media presence across
 * different pages with customizable styling and responsive behavior.
 *
 * Features:
 * - Configurable styling through className prop
 * - Hover effects for better user interaction
 * - Accessibility support with proper labels
 * - Touch-friendly sizing for mobile devices
 * - Consistent icon set from react-icons
 *
 * Design Pattern:
 * - Data-driven approach with centralizedData array
 * - Flexible styling through props
 * - Semantic HTML with proper accessibility attributes
 *
 * @file components/SocialLinks.js
 * @author Pin Ren Toh
 */

import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

/**
 * SocialLinks Component
 *
 * Renders a horizontal list of social media and contact links with icons.
 * Each link opens in a new tab for external navigation and includes
 * proper accessibility attributes.
 *
 * The component is highly reusable and allows complete customization
 * of layout and styling through the className prop.
 *
 * @param {Object} props - Component props
 * @param {string} [props.className] - Custom CSS classes for styling flexibility
 * @returns {JSX.Element} Container with social media links and icons
 *
 * @example
 * // Default usage with standard styling
 * <SocialLinks />
 *
 * @example
 * // Custom styling for specific layout needs
 * <SocialLinks className="flex justify-start gap-4 text-xl" />
 */
const SocialLinks = ({ className = 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-2 text-gray-600 dark:text-gray-400 cursor-pointer' }) => {

  /**
   * Social media links configuration
   *
   * Centralized data structure for easy maintenance and modification.
   * Each object contains all necessary information for rendering a link:
   * - href: The destination URL
   * - icon: React component for the icon
   * - hoverClass: CSS classes for hover effects
   * - label: Accessibility label for screen readers
   */
  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/tohpinren/',
      icon: AiFillLinkedin,
      hoverClass: 'hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200',
      label: 'LinkedIn'
    },
    {
      href: 'https://github.com/tohpinren',
      icon: AiFillGithub,
      hoverClass: 'hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200',
      label: 'GitHub'
    },
    {
      href: 'mailto:tohpinren@gmail.com',
      icon: AiFillMail,
      hoverClass: 'hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200',
      label: 'Email'
    }
  ];

  return (
    // Container with customizable styling
    <div className={className}>
      {/* Map through social links data to render each link */}
      {socialLinks.map(({ href, icon: Icon, hoverClass, label }) => (
        <a
          key={href} // Unique key using href since it's guaranteed to be unique
          href={href}
          target="_blank" // Open in new tab for external links
          rel="noopener noreferrer" // Security best practice for external links
          aria-label={label} // Accessibility label for screen readers
          className="touch-target" // Enhanced touch target size for mobile devices
        >
          {/*
            Render the icon component with hover effects
            Icon is destructured from the data object as a component
          */}
          <Icon className={hoverClass} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;