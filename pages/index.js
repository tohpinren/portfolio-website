"use client";

import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';
import SocialLinks from '../components/SocialLinks';
import me from '../public/me.jpg';

export default function Home() {
  return (
    <PageLayout title="Pin Ren Toh - Home">
      <Head>
        <title>Pin Ren Toh - Home</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>

      <div className="container-mobile flex flex-col items-center justify-start min-h-screen pt-4 sm:pt-6 md:pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto w-full"
        >
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
              className="rounded-lg object-cover shadow-2xl ring-2 ring-blue-500/20 dark:ring-blue-400/30 group-hover:ring-blue-500/40 dark:group-hover:ring-blue-400/50 transition-all duration-300"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 mobile-margin"
          >
            Pin Ren Toh
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6 sm:mb-8 tracking-wide mobile-margin"
          >
            Y4 Computer Science @ NUS (AI + Systems)
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mobile-margin"
          >
            <SocialLinks className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex justify-center gap-6 sm:gap-8 md:gap-10 py-2 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
