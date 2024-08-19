import React from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai'
import Experience from 'components/Experience'
import Education from 'components/Education'

const About = () => {
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
            <title>Toh Pin Ren</title>
            <meta name='description' content='developed by Pin Ren'/>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='bg-white text-black dark:bg-black dark:text-white'>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-bold text-2xl sm:text-3xl'>Nice to meet you!</h1>
                <h3 className='text-base sm:text-xl w-[70%] sm:w-[50%]'>
                  I&apos;m Pin Ren. I&apos;m a 3rd Year Computer Science Undergraduate at the National University of Singapore (NUS) specialising in Networking & Distributed Systems and Artificial Intelligence.
                  I'm deeply passionate about building highly efficient systems that can scale gracefully to tackle real-world problems.
                </h3>
                <br />
                <h3 className='text-base sm:text-xl w-[70%] sm:w-[50%]'>
                  Currently, I am a Software Engineering Intern at Kipo AI, under the NUS Overseas College Silicon Valley program.
                </h3>
                <br />
                <h3 className='text-base sm:text-xl w-[70%] sm:w-[50%]'>
                  I am currently looking for a Software Engineering Internship for 2025 Summer.
                </h3>
                <br />
                <div className='text-3xl sm:text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer'>
                    <a href="https://www.linkedin.com/in/tohpinren/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className='hover:text-blue-600' />
                    </a>
                    <a href="https://github.com/tohpinren" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className='hover:text-gray-400' />
                    </a>
                    <a href="mailto:tohpinren@gmail.com" target="_blank" rel="noopener noreferrer">
                        <AiFillMail className='hover:text-red-500' />
                    </a>
                </div>
            </div>

            <Experience />
            <Education />

        </main>
        <Footer />
    </div>
  )
}

export default About
