"use client";

import Head from 'next/head'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import Image from 'next/image'
import me from 'public/me.jpg'
import { useState, useEffect } from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import Layout from 'app/Layout'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode preference is stored in local storage
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    // Update local storage when dark mode state changes
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);


  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Toh Pin Ren Portfolio</title>
        <meta name='description' content='developed by Pin Ren'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white text-black dark:bg-black'>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <section className='min-h-screen'>
          <div className='text-center'>
            <Image alt='Picture of me' className='mx-auto center rounded-full w-96 h-96 md:h-120 md:w-120' src={me} />
            <h2 className='text-teal-600 text-5xl font-md py-2 md:text-6xl dark:text-teal-500'>
              Toh Pin Ren
            </h2>
            <h3 className='text-black text-2xl py-2 md:text-3xl dark:text-white'>
              NUS Y2 CS
            </h3>
            <p className='text-black text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
              Interested in building products to solve real-world problems.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-2 text-gray-600 cursor-pointer'>
            <a href="https://www.linkedin.com/in/tohpinren/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className='hover:text-blue-600' />
            </a>
            <a href="https://github.com/tohpinren" target="_blank" rel="noopener noreferrer">
              <AiFillGithub className='hover:text-gray-400' />
            </a>
            <a href="mailto:tohpinren@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail className='hover:text-red-500'/>
            </a>
          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}
