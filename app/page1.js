"use client";

import Head from 'next/head'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import me from '../public/me.jpg'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Toh Pin Ren Portfolio</title>
        <meta name='description' content='developed by Pin Ren'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <section className='min-h-screen'>
          <div className='text-center p-10'>
            <Image className='mx-auto center rounded-full w-80 h-80 md:h-120 md:w-120' src={me} />
            <h2 className='text-teal-600 text-5xl font-md py-2 md:text-6xl'>
              Toh Pin Ren
            </h2>
            <h3 className='text-black text-2xl py-2 md:text-3xl dark:text-white'>
              NUS Y2 CS
            </h3>
            <p className='text-black text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>
              Interested in building products to solve real-world problems.
            </p>
          </div>

          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </section>

        <section>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-1 text-black font-md dark:text-white'>
              Projects
            </h2>
            <p className='text-black text-md py-5 leading-8 text-gray-800 dark:text-white'>
              Here are some of my projects that I have worked on.
            </p>

            <div className='text-center shadow-lg p-10 rounded-xl'>
              <h3 className='text-black dark:text-white'>MIT BattleCode 2023</h3>
              <p className='text-black dark:text-white'>MIT Hackathon</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl'>
              <h3 className='text-black dark:text-white'>Party Web App</h3>
              <p className='text-black dark:text-white'>Party application</p>
            </div>

          </div>
        </section>
        
      </main>
      <Footer />
    </div>
  )
}
