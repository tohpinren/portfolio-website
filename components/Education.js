/**
 * Education Component
 *
 * Educational background timeline component that showcases academic history
 * in a chronological format. Features animated cards with detailed information
 * about educational achievements and programs.
 *
 * Key Features:
 * - Timeline-style layout matching the Experience component design
 * - Responsive design adapting to all screen sizes
 * - Detailed educational information with institution details
 * - Chronological ordering with current education first
 * - Consistent card styling for visual harmony
 *
 * Design Pattern:
 * - Reusable Details component for individual education items
 * - Data-driven approach with centralized education array
 * - Animation on scroll for better user engagement
 * - Semantic HTML structure for accessibility
 *
 * @file components/Education.js
 * @author Pin Ren Toh
 */

import { motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Details Component
 *
 * Individual education card component displaying a single educational experience.
 * Features smooth animations when scrolled into view and responsive layout
 * that adapts to different screen sizes.
 *
 * @param {Object} props - Component props
 * @param {string} props.type - Degree or program type (e.g., "Bachelor of Computing")
 * @param {string} props.time - Duration of study (e.g., "Aug 2022 - Apr 2026")
 * @param {string} props.school - Institution name
 * @param {string[]} props.info - Array of additional details (grades, programs, achievements)
 * @returns {JSX.Element} Animated education card with all academic details
 */
const Details = ({ type, time, school, info }) => {
  // Ref for tracking element visibility for animations
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-6 sm:my-8 first:mt-0 last:mb-0 w-full max-w-4xl mx-auto flex flex-col items-start justify-between">
      <motion.div
        // Animate up from bottom when element comes into view
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }} // Spring animation for natural feel
        viewport={{ once: true }} // Animate only once for performance
        className="w-full bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
      >

        {/* Institution name as primary heading */}
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">
          {school}
        </h3>

        {/* Degree type and duration information */}
        <span className="capitalize text-sm sm:text-base md:text-lg font-medium text-gray-600 dark:text-gray-400 mb-4 block">
          {type} | {time}
        </span>

        {/* Additional information with visual accent border */}
        <div className="space-y-2 border-l-4 border-blue-300 dark:border-blue-400 pl-3 sm:pl-4">
          {info.map((point, index) => (
            <div key={index} className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {point}
            </div>
          ))}
        </div>
      </motion.div>
    </li>
  );
};

/**
 * Education Component
 *
 * Main education section that renders a timeline of academic achievements.
 * Displays educational background in chronological order with consistent
 * styling and smooth animations for enhanced user experience.
 *
 * Data Management:
 * - Education entries stored in local array for easy maintenance
 * - Each entry includes comprehensive details about the academic experience
 * - Ordered chronologically from current/recent to oldest
 *
 * Layout Strategy:
 * - Vertical timeline layout for clear chronological flow
 * - Responsive spacing that adapts to screen size
 * - Centered content with maximum width constraints
 * - Consistent with Experience component for visual harmony
 *
 * @returns {JSX.Element} Complete education section with timeline layout
 */
const Education = () => {
  /**
   * Educational background data
   *
   * Array of education objects containing detailed information about
   * each academic experience. Ordered chronologically with current
   * and recent education first for better user engagement.
   */
  const education = [
    {
      type: 'Bachelor of Computing in Computer Science',
      time: 'Aug 2022 - Apr 2026',
      school: 'National University of Singapore',
      info: [
        'Grade: First Class Honours',
        'NOC Southeast Asia Bangkok',
        'NOC Silicon Valley'
      ]
    },
    {
      type: 'Exchange Program - Computer Science',
      time: 'Jan 2025 - May 2025',
      school: 'University College Dublin',
      info: [
        'Student Exchange Program (SEP)',
      ]
    },
    {
      type: 'NUS Overseas Colleges - Silicon Valley',
      time: 'Mar 2024 - Jun 2024',
      school: 'Stanford University',
      info: [
        'MS&E472: Entrepreneurial Thought Leaders\' Seminar',
        'MS&E178: Entrepreneurship: Principles and Perspectives',
        'Audited CS221: Artificial Intelligence: Principles and Techniques',
        'Audited CS244b: Distributed Systems'
      ]
    },
    {
      type: 'GCE A Level',
      time: 'Jan 2018 - Dec 2019',
      school: 'Anglo-Chinese Junior College',
      info: [
        'RP: 87.5/90',
        'ACJC Scholastic Merit Award',
        "Top Students' List for Promotional Examination"
      ]
    }
  ];

  return (
    <div className="mt-12 sm:mt-16 pb-16 sm:pb-20">

      {/* Section heading with animation */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 w-full text-center text-gray-900 dark:text-white mobile-margin"
      >
        Education
      </motion.h2>

      {/* Timeline container with responsive layout */}
      <div className="w-full max-w-4xl mx-auto relative">
        {/* Education timeline list */}
        <ul className="w-full flex flex-col items-start justify-between space-y-6 sm:space-y-8">
          {education.map((edu, index) => (
            // Spread operator passes all education properties as props to Details component
            <Details key={index} {...edu} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;