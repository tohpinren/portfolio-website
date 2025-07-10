/**
 * About Page Component
 *
 * Comprehensive about page showcasing Pin Ren Toh's background, experience, and education.
 * This page serves as the detailed professional profile with:
 * - Personal introduction with photo
 * - Professional experience timeline
 * - Educational background
 * - Social media links
 *
 * Layout Strategy:
 * - Two-column responsive layout (mobile stacks vertically)
 * - Image on left, content on right for desktop
 * - Consistent spacing and typography
 * - Integrated timeline components for experience/education
 *
 * @file pages/about.js
 * @author Pin Ren Toh
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import Education from '../components/Education';
import Experience from '../components/Experience';
import PageLayout from '../components/PageLayout';
import SocialLinks from '../components/SocialLinks';

/**
 * About Page Component
 *
 * Renders a comprehensive about page with personal introduction,
 * professional experience, and educational background. Uses a responsive
 * two-column layout that adapts to different screen sizes.
 *
 * Component Structure:
 * 1. Hero section with image and bio
 * 2. Experience timeline component
 * 3. Education timeline component
 *
 * @returns {JSX.Element} The complete about page with all sections
 */
const About = () => {
  return (
    <PageLayout title="About - Pin Ren Toh">
      {/* Main container with responsive padding */}
      <div className="container-mobile py-6 sm:py-8">

        {/* Hero section with personal introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-6 md:gap-12"
        >

          {/* Profile image section - responsive sizing */}
          <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
            <Image
              src="/me1.jpeg"
              alt="Pin Ren Toh at sunset in the mountains"
              width={320}
              height={400}
              // Optimize for above-the-fold content
              priority
              className="rounded-2xl shadow-lg object-cover max-h-80 sm:max-h-96 ring-2 ring-blue-500/20 dark:ring-blue-400/30 hover:ring-blue-500/40 dark:hover:ring-blue-400/50 transition-all duration-300"
            />
          </div>

          {/* Content section with bio and links */}
          <div className="flex-1 w-full md:w-auto">

            {/* Page heading with responsive typography */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left mobile-margin">
              Nice to meet you!
            </h1>

            {/* Personal introduction with structured paragraphs */}
            <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left mobile-margin">

              {/* Academic background */}
              <p>
                I&apos;m Pin Ren, a Year 4 Computer Science student at the National University of Singapore (NUS), specializing in Artificial Intelligence.
              </p>

              {/* Professional interests and current work */}
              <p>
                I&apos;m passionate about building practical AI systems and distributed infrastructure. I&apos;m currently working on my Final Year Project exploring LLMs and databases, developing techniques to automatically generate SQL benchmarks.
              </p>

              {/* Career aspirations */}
              <p>
                I&apos;m actively seeking full-time Software Engineering roles starting Summer 2026.
              </p>

              {/* Personal interests and hobbies */}
              <p>
                When I&apos;m not coding, I enjoy reading, cooking, and exploring new restaurants! I stay active through running and hiking, and love films and travel.
              </p>
            </div>

            {/* Social media links with consistent styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }} // Delayed animation for better UX
              className="mt-6 mobile-margin"
            >
              {/*
                Social links with responsive layout
                Centered on mobile, left-aligned on desktop for consistency with text
              */}
              <SocialLinks className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center md:justify-start gap-6 sm:gap-8 md:gap-12 py-2 text-gray-600 dark:text-gray-400" />
            </motion.div>
          </div>
        </motion.div>

        <Experience />
        <Education />
      </div>
    </PageLayout>
  );
};

export default About;
