import { motion } from 'framer-motion';
import Image from 'next/image';
import Education from '../components/Education';
import Experience from '../components/Experience';
import PageLayout from '../components/PageLayout';
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <PageLayout title="About - Pin Ren Toh">
      <div className="container-mobile py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-6 md:gap-12"
        >
         <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
           <Image
             src="/me1.jpeg"
             alt="Pin Ren Toh at sunset in the mountains"
             width={320}
             height={400}
             className="rounded-2xl shadow-lg object-cover max-h-80 sm:max-h-96 ring-2 ring-blue-500/20 dark:ring-blue-400/30 hover:ring-blue-500/40 dark:hover:ring-blue-400/50 transition-all duration-300"
             priority
           />
         </div>
         <div className="flex-1 w-full md:w-auto">
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left mobile-margin">
             Nice to meet you!
           </h1>
           <div className="space-y-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left mobile-margin">
             <p>
               I&apos;m Pin Ren, a Year 4 Computer Science student at the National University of Singapore (NUS), specializing in Artificial Intelligence.
             </p>
             <p>
               I&apos;m passionate about building practical AI systems and distributed infrastructure. I&apos;m currently working on my Final Year Project exploring LLMs and databases, developing techniques to automatically generate SQL benchmarks.
             </p>
             <p>
               I&apos;m actively seeking full-time Software Engineering roles starting Summer 2026.
             </p>
             <p>
               When I&apos;m not coding, I enjoy reading, cooking, and exploring new restaurants! I stay active through running and hiking, and love films and travel.
             </p>
           </div>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="mt-6 mobile-margin"
           >
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
