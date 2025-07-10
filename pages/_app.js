/**
 * Main Next.js Application Component
 *
 * This is the root component that wraps all pages in the application.
 * It provides global functionality including:
 * - Font loading and application (Inter font from Google Fonts)
 * - Global CSS imports
 * - Analytics integration with Vercel
 * - Common layout structure for all pages
 *
 * @file pages/_app.js
 * @author Pin Ren Toh
 */

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import '../globals.css';

// Configure Inter font from Google Fonts with Latin subset
// This ensures consistent typography across the entire application
const inter = Inter({ subsets: ['latin'] });

/**
 * Custom App Component
 *
 * Next.js uses the App component to initialize pages. This allows us to:
 * - Persist layouts between page changes
 * - Keep state when navigating pages
 * - Inject additional data into pages
 * - Add global CSS
 *
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.Component - The active page component
 * @param {Object} props.pageProps - Props passed to the page component
 * @returns {JSX.Element} The wrapped application structure
 */
export default function MyApp({ Component, pageProps }) {
  return (
    // Apply Inter font to the entire application through CSS class
    <div className={inter.className}>
      {/* Render the current page component with its props */}
      <Component {...pageProps} />

      {/* Vercel Analytics component for tracking page views and performance */}
      <Analytics />
    </div>
  );
}
