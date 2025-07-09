import { motion } from 'framer-motion';
import { useRef } from 'react';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className="my-6 sm:my-8 first:mt-0 last:mb-0 w-full max-w-4xl mx-auto flex flex-col items-start justify-between">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
        className="w-full bg-white dark:bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm"
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">
          {position}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 break-words"
          >
            {' '}@ {company}
          </a>
        </h3>
        <span className="capitalize font-medium text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-4 block">
          {time} | {address}
        </span>
        <div className="space-y-2 border-l-4 border-blue-300 dark:border-blue-400 pl-3 sm:pl-4">
          <div className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {work}
          </div>
        </div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const experiences = [
    {
      position: 'Software Engineer Intern',
      company: 'Kipo AI',
      companyLink: 'https://kipoparts.com/',
      time: 'May 2025 - Aug 2025',
      address: 'San Francisco, California, USA',
      work: 'Returned to Kipo AI to work on multimodal data extraction from complex technical documents. I focused on building systems that could understand tables, images, and graphs within datasheets, helping improve the accuracy of our part extraction pipeline.'
    },
    {
      position: 'Software Engineer Intern',
      company: 'Kipo AI',
      companyLink: 'https://kipoparts.com/',
      time: 'Jan 2024 - Dec 2024',
      address: 'San Francisco, California, USA',
      work: 'My first internship at Kipo AI involved building the core infrastructure for processing millions of technical datasheets. I worked on scraping, embedding, and querying systems using MongoDB and AWS, while integrating various LLMs to extract structured data from complex diagrams and technical documents.'
    },
    {
      position: 'Software Engineer',
      company: 'Marymount Labs',
      companyLink: 'https://marymountlabs.com/',
      time: 'Jan 2023 - Oct 2023',
      address: 'Singapore',
      work: 'At Marymount Labs, I worked on digital infrastructure for primary care clinics. I built an NLP assistant that could generate SQL queries from natural language, developed a vaccine recommendation system, and created an SMS follow-up system to improve patient engagement. I also helped deploy an Electronic health record system across multiple clinics to streamline their operations.'
    },
    {
      position: 'Teaching Assistant',
      company: 'National University of Singapore',
      companyLink: 'https://nus.edu.sg/',
      time: 'Aug 2023 - Nov 2023',
      address: 'Singapore',
      work: 'As a teaching assistant for CS1101S, I led weekly tutorials and mentored students in foundational programming concepts.'
    },
    {
      position: 'Product Management Intern',
      company: 'Yindii',
      companyLink: 'https://www.yindii.co/',
      time: 'May 2023 - Aug 2023',
      address: 'Bangkok, Thailand',
      work: 'During my time with Yindii, I explored the intersection of tech, sustainability, and product. I worked on growth-focused features for their food rescue app.'
    },
    {
      position: 'Data Analyst',
      company: 'i-CARE Primary Care Network',
      companyLink: 'https://www.icarepcn.com/',
      time: 'Feb 2022 - Jun 2022',
      address: 'Singapore',
      work: 'At i-CARE, I worked on automating patient data reports and building dashboards to support clinical decision-making. This was one of my first experiences using data to drive real-world healthcare decisions, and I got to see how simple tools could make a meaningful difference in patient care.'
    },
    {
      position: 'Assistant Software Engineer',
      company: 'NEC Asia Pacific',
      companyLink: 'https://sg.nec.com/',
      time: 'Nov 2021 - Jan 2022',
      address: 'Singapore',
      work: 'My internship at NEC gave me early exposure to enterprise software development. I worked on developing encrypted web APIs for their CRM system.'
    }
  ];

  return (
    <div className="mt-12 sm:mt-16 pb-16 sm:pb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-12 w-full text-center text-gray-900 dark:text-white mobile-margin"
      >
        Experience
      </motion.h2>

      <div className="w-full max-w-4xl mx-auto relative">
        <ul className="w-full flex flex-col items-start justify-between space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Details key={index} {...exp} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
