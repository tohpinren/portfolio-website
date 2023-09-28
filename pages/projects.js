import React from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai'
import sps from 'public/sps.png'
import bbdc from 'public/bbdc.png'
import battlecode from 'public/battlecode.jpeg'
import party from 'public/party.png'
import orderbook from 'public/orderbook.png'

const Project = ({title, summary, img, link, github, date, tech}) => {
  return (
    <article className='w-[70%] flex item-center justify-between
    rounded-3xl border border-solid border-black bg-white shadow-2xl p-12'>

      <Link href={link} target="_blank" rel="noopener noreferrer"
      className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <Link href={link} target="_blank" rel="noopener noreferrer" className='hover:underline underline-offset-2 dark:text-black'>
          <h2 className='my-2 w-full text-left text-xl sm:text-4xl font-bold'>{title}</h2>
        </Link>
        <p className='my-2 text-xs sm:text-base font-medium text-black'>{date}</p>
        <p className='my-2 text-xs sm:text-base font-medium text-black'>{summary}</p>
        <p className='my-2 text-xs sm:text-base font-medium text-black'>Tech Stack: {tech}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" rel="noopener noreferrer"
          className='w-20 text-4xl sm:text-6xl dark:text-black'>
            <AiFillGithub className='hover:text-gray-400 '/>
          </Link>
          <Link href={link} target="_blank" rel="noopener noreferrer"
          className='sm:ml-4 rounded-lg bg-black text-white p-1 sm:p-2 px-2 sm:px-6 text-xs sm:text-lg font-semibold hover:bg-gray-400'>
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
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
            <div className='flex flex-col items-center'>
                <h1 className='text-bold text-xl sm:text-3xl mb-8'>Hi! Here are some of my projects.</h1>
            </div>

            <div className='flex flex-col items-center justify-evenly gap-20 pb-32'>
              <Project
                title='Fast Limit Order Book'
                date='Sep 2023'
                summary='Implemented an efficient limit order book for high-frequency trading that supports mostly O(1) operations.'
                tech='C++, Doctest'
                img={orderbook}
                github='https://github.com/tohpinren/order-book'
                link='https://github.com/tohpinren/order-book'
              />
              <Project
                title='Party When? Web App'
                date='Mar 2023'
                summary='A web app that allows users to plan and join parties hosted by other users.'
                tech='React, Node.js, Express.js, MongoDB, HTML, CSS'
                img={party}
                github='https://github.com/tohpinren/party-app'
                link='https://github.com/tohpinren/party-app'
              />
                <Project
                  title='MIT BattleCode 2023'
                  date='Jan 2023'
                  summary='Competed in a RTS AI multiplayer programming competition, developing a player controller capable of strategising
                  and playing against other teams.'
                  tech='Java'
                  img={battlecode}
                  github='https://github.com/tohpinren/Mixue-Rats'
                  link='https://battlecode.org/'
                />
              <Project
                title='Scissors Paper Stone Game'
                date='Dec 2022'
                summary='A website for playing Scissors, Paper, Stone against a computer'
                tech='JavaScript, HTML, CSS'
                img={sps}
                github='https://github.com/tohpinren/scissors-paper-stone'
                link='https://tohpinren.github.io/scissors-paper-stone/'
              />
              <Project
                title='BBDC Simulator Slot Booking Bot'
                date='Oct 2021'
                summary='An automated script that books driving simulator lessons at Bukit Batok Driving Centre, a driving school in Singapore.'
                tech='Python, Selenium'
                img={bbdc}
                github='https://github.com/tohpinren/BBDCBot'
                link='https://github.com/tohpinren/BBDCBot'
              />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Projects
