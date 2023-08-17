import React from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import { useState } from 'react'
import Head from 'next/head'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Experience from 'components/Experience'
import Education from 'components/Education'

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
        <Head>
            <title>Toh Pin Ren</title>
            <meta name='description' content='developed by Pin Ren'/>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className='bg-white text-black'>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-bold text-3xl'>Nice to meet you!</h1>
                <h3 className='text-xl w-[50%]'>
                    I'm Pin Ren. I'm a 2nd Year Computer Science undergraduate at the National University of Singapore.
                    I am currently looking for a Software Engineering Internship for Summer 2024.
                </h3>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 cursor-pointer'>
                    <a href="https://github.com/tohpinren" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/tohpinren/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>

            <Experience />
            <Education />

        </main>
        <Footer />
    </>
  )
}

export default About