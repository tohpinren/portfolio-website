/**
 * Custom React Hook for Dark Mode Management
 *
 * This hook provides persistent dark mode functionality across the application.
 * It manages the dark mode state in localStorage to maintain user preferences
 * between browser sessions.
 *
 * Features:
 * - Automatic persistence to localStorage
 * - Initialization from stored preferences
 * - Reactive state updates
 *
 * @file hooks/useDarkMode.js
 * @author Pin Ren Toh
 */

import { useEffect, useState } from 'react';

/**
 * Dark Mode Hook
 *
 * Manages dark mode state with localStorage persistence. The hook initializes
 * from stored preferences and automatically saves changes to localStorage.
 *
 * Implementation Details:
 * - Uses two useEffect hooks to separate initialization and persistence logic
 * - Defaults to light mode (false) for new users
 * - Stores boolean values as strings in localStorage
 *
 * @returns {[boolean, function]} A tuple containing:
 *   - darkMode: Current dark mode state (true = dark, false = light)
 *   - setDarkMode: Function to update dark mode state
 *
 * @example
 * const [darkMode, setDarkMode] = useDarkMode();
 *
 * // Toggle dark mode
 * const toggleDarkMode = () => setDarkMode(!darkMode);
 *
 * // Apply dark mode class conditionally
 * <div className={darkMode ? 'dark' : 'light'}>
 */
const useDarkMode = () => {
  // Initialize dark mode state - defaults to false (light mode)
  const [darkMode, setDarkMode] = useState(false);

  // Effect: Initialize dark mode from localStorage on component mount
  // This ensures user preferences persist across browser sessions
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      // Convert stored string back to boolean
      setDarkMode(storedDarkMode === 'true');
    }
    // Note: If no stored preference exists, we keep the default (false)
  }, []); // Empty dependency array ensures this runs only once on mount

  // Effect: Save dark mode preference to localStorage whenever it changes
  // This runs after every darkMode state update
  useEffect(() => {
    // Store boolean as string since localStorage only supports strings
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]); // Re-run whenever darkMode changes

  // Return tuple: [state, setter] following React hooks convention
  return [darkMode, setDarkMode];
};

export default useDarkMode;