import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

const ProjectCard = ({ title, description, image, technologies, link, github }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800"
    >
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
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
        <div className="flex flex-col sm:flex-row gap-3">
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
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white font-semibold rounded-lg transition-colors duration-200"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: 'Google AI Hackathon Project',
      description: 'LLM agent platform combining CCTV video, crime statistics, and Gemini reasoning to identify public safety threats.',
      image: '/googleaihackathon.png',
      technologies: ['Python', 'Google Cloud', 'Gemini'],
      link: null,
      github: 'https://github.com/tohpinren',
      year: 2024
    },
    {
      title: 'Fast Limit Order Book',
      description: 'High-performance order-matching engine simulating stock exchange activity with constant-time complexity.',
      image: '/orderbook.png',
      technologies: ['C++'],
      link: null,
      github: 'https://github.com/tohpinren',
      year: 2023
    },
    {
      title: 'MIT Battlecode',
      description: 'Developed AI strategies to compete against other teams&apos; bots in a real-time strategy game.',
      image: '/battlecode.jpeg',
      technologies: ['Java'],
      link: null,
      github: 'https://github.com/tohpinren',
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

      <div className="container-mobile py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              My Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
              Here are some of the projects I&apos;ve worked on!
            </p>
          </motion.div>

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
