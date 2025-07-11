/**
 * Projects Page Component
 *
 * Portfolio showcase page displaying software engineering projects.
 * Features a responsive grid layout with individual project cards that include:
 * - Project thumbnails and descriptions
 * - Technology stack badges
 * - Links to live demos and source code
 * - Animated entrance effects
 *
 * Design Pattern:
 * - Reusable ProjectCard component for consistency
 * - Responsive grid that adapts to screen size
 * - Data-driven approach with projects array
 * - Chronological sorting (newest first)
 *
 * @file pages/projects.js
 * @author Pin Ren Toh
 */

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

/**
 * ProjectCard Component
 *
 * Reusable card component for displaying individual project information.
 * Features hover effects, responsive design, and consistent styling across all projects.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Project title/name
 * @param {string} props.description - Brief project description
 * @param {string} props.image - Path to project thumbnail image
 * @param {string[]} props.technologies - Array of technology/framework names
 * @param {string|null} props.link - URL to live demo (null if not available)
 * @param {string|null} props.github - URL to GitHub repository (null if not available)
 * @returns {JSX.Element} Animated project card with all project details
 */
const ProjectCard = ({ title, description, image, technologies, link, github }) => {
  return (
    <motion.div
      // Animate in when scrolled into view
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // Animation only triggers once for performance
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
    >

      {/* Project thumbnail/image section */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Project details section */}
      <div className="p-4 sm:p-6">

        {/* Project title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* Project description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technology stack badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons for demo and source code */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Live demo button (conditional rendering) */}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
            </a>
          )}

          {/* Project link button (conditional rendering) */}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Projects Page Component
 *
 * Main projects page that displays a grid of project cards.
 * Projects are sorted chronologically (newest first) and rendered
 * in a responsive grid layout.
 *
 * Data Management:
 * - Projects stored in local array for easy maintenance
 * - Each project includes metadata like year for sorting
 * - Flexible structure allows for easy addition of new projects
 *
 * @returns {JSX.Element} Complete projects page with grid layout
 */
export default function Projects() {
  const projects = [
    {
      title: 'Google AI Hackathon Project',
      description: 'LLM agent platform combining CCTV video, crime statistics, and Gemini reasoning to identify public safety threats.',
      image: '/googleaihackathon.png',
      technologies: ['Python', 'Google Cloud', 'Gemini'],
      link: null,
      github: 'https://devpost.com/software/crimewatch-ai?ref_content=my-projects-tab&ref_feature=my_projects',
      year: 2024
    },
    {
      title: 'Fast Limit Order Book',
      description: 'High-performance order-matching engine simulating stock exchange activity with constant-time complexity.',
      image: '/orderbook.png',
      technologies: ['C++'],
      link: null,
      github: 'https://github.com/tohpinren/order-book',
      year: 2023
    },
    {
      title: 'MIT Battlecode',
      description: "Developed AI strategies to compete against other teams' bots in a real-time strategy game.",
      image: '/battlecode.jpeg',
      technologies: ['Java'],
      link: null,
      github: 'https://battlecode.org/',
      year: 2023
    }
  ];

  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <PageLayout title="Projects - Pin Ren Toh">
      <Head>
        <title>Projects - Pin Ren Toh</title>
        <meta name="description" content="My software engineering projects" />
      </Head>

      {/* Main container with responsive spacing */}
      <div className="container-mobile py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">

          {/* Page header with title and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            {/* Main page heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>

            {/* Page description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
              Here are some of the projects I&rsquo;ve worked on!
            </p>
          </motion.div>

          {/* Projects grid - responsive layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
