/**
 * PageLayout Component
 *
 * Universal layout wrapper component that provides consistent structure and functionality
 * across all pages of the portfolio website. This component serves as the foundation
 * for every page and handles:
 *
 * Core Features:
 * - Dark mode management and state persistence
 * - Common HTML meta tags and SEO optimization
 * - Consistent navigation and footer across pages
 * - Responsive viewport configuration
 * - Theme color management for mobile browsers
 *
 * Layout Structure:
 * - NavBar (sticky header with navigation and dark mode toggle)
 * - Main content area (provided via children prop)
 * - Footer (consistent across all pages)
 *
 * @file components/PageLayout.js
 * @author Pin Ren Toh
 */

import Head from 'next/head';
import useDarkMode from '../hooks/useDarkMode';
import Footer from './Footer';
import NavBar from './NavBar';

/**
 * PageLayout Component
 *
 * Provides consistent layout structure and functionality for all pages.
 * Integrates dark mode management and ensures proper SEO configuration.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Page content to be rendered in the main area
 * @param {string} [props.title='Pin Ren Toh Portfolio'] - Page title for SEO and browser tab
 * @param {string} [props.description='Personal portfolio of Pin Ren Toh'] - Meta description for SEO
 * @returns {JSX.Element} Complete page layout with navigation, content, and footer
 *
 * @example
 * <PageLayout title="About - Pin Ren Toh" description="Learn more about Pin Ren">
 *   <div>Page content goes here</div>
 * </PageLayout>
 */
const PageLayout = ({
  children,
  title = 'Pin Ren Toh Portfolio',
  description = 'Personal portfolio of Pin Ren Toh'
}) => {
  // Initialize dark mode hook for theme management
  // This provides both the current state and setter function
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    // Apply dark mode class to root div for CSS theming
    // Tailwind CSS uses this class to toggle dark mode styles
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/icon.png" />

        {/* Mobile optimization and responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

        {/* Dynamic theme color based on dark mode state */}
        {/* This affects the browser UI color on mobile devices */}
        <meta name="theme-color" content={darkMode ? "#000000" : "#ffffff"} />

        {/* Progressive Web App (PWA) configuration */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>

      {/* Main content wrapper with background theming */}
      <main className="min-h-screen bg-blue-50 dark:bg-black text-black dark:text-white">
        {/*
          Navigation bar component - sticky positioned for persistent access
          Receives dark mode state and setter for theme toggle functionality
        */}
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Page-specific content area */}
        {/* Children prop allows each page to define its own content */}
        {children}
      </main>

      {/* Footer component - consistent across all pages */}
      <Footer />
    </div>
  );
};

export default PageLayout;