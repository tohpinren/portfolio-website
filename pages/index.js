/**
 * Home Page Component
 *
 * The main landing page of Pin Ren Toh's portfolio website. Features:
 * - Animated hero section with profile image
 * - Personal introduction and title
 * - Social media links
 * - Responsive design with mobile-first approach
 * - Smooth animations using Framer Motion
 *
 * Design Pattern:
 * - Uses staggered animations for visual hierarchy
 * - Implements responsive breakpoints for different screen sizes
 * - Follows accessibility best practices with semantic HTML
 *
 * @file pages/index.js
 * @author Pin Ren Toh
 */

"use client";

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';
import SocialLinks from '../components/SocialLinks';
import me from '../public/me.jpg';

/**
 * Home Page Component
 *
 * Renders the main landing page with animated elements and responsive design.
 * The page uses Framer Motion for entrance animations and Next.js Image
 * optimization for performance.
 *
 * Animation Strategy:
 * - All elements animate in with staggered delays (0.1s increments)
 * - Uses consistent motion values for smooth visual flow
 * - Implements spring-based transitions for natural feel
 *
 * @returns {JSX.Element} The complete home page with animations
 */
export default function Home() {
  return (
    <PageLayout title="Pin Ren Toh - Home">
      <Head>
        <title>Pin Ren Toh - Home</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      {/* Main container with responsive padding and mobile-optimized layout */}
      <div className="container-mobile flex flex-col items-center justify-start min-h-screen pt-4 sm:pt-6 md:pt-8 pb-16">

        {/* Hero section with staggered animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto w-full"
        >

          {/* Profile image with hover effects and responsive sizing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-6 sm:mb-8 group"
          >
            <Image
              alt="Pin Ren Toh"
              src={me}
              fill
              // Priority loading for above-the-fold content
              priority
              // Advanced styling with hover effects and dark mode support
              className="rounded-lg object-cover shadow-2xl ring-2 ring-blue-500/20 dark:ring-blue-400/30 group-hover:ring-blue-500/40 dark:group-hover:ring-blue-400/50 transition-all duration-300"
            />
          </motion.div>

          {/* Main heading with responsive typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 mobile-margin"
          >
            Pin Ren Toh
          </motion.h1>

          {/* Subtitle with academic focus and consistent styling */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6 sm:mb-8 tracking-wide mobile-margin"
          >
            Y4 Computer Science @ NUS (AI + Systems)
          </motion.h2>

          {/* Social links section with final animation delay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mobile-margin"
          >
            {/*
              Social links component with responsive sizing and spacing
              Uses the SocialLinks component for consistency across pages
            */}
            <SocialLinks className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center gap-6 sm:gap-8 md:gap-10 py-2 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
