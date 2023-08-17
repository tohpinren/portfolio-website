import React from 'react'
import NavBar from 'components/NavBar'
import Footer from 'components/Footer'
import { useState } from 'react'
import Head from 'next/head'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const About = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
        <Head>
            <title>Toh Pin Ren Portfolio</title>
            <meta name='description' content='developed by Pin Ren'/>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <div>
                <h1 className='text-bold'>Nice to meet you!</h1>
                <h3>
                    I'm Pin Ren. I'm currently a 2nd year student at the National University of Singapore studying Computer Science.
                </h3>
                <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                    <AiFillGithub />
                    <AiFillLinkedin />
                </div>
            </div>

            <section>
                <div className='text-center p-10'>
                    <h2 className='text-5xl py-1 text-black font-md dark:text-white'>
                    Portfolio
                    </h2>
                    <p className='text-black text-md py-5 leading-8 text-gray-800 dark:text-white'>
                    Here are some of my projects that I have worked on.
                    </p>
                </div>
            </section>
            

        </main>
        <Footer />
    </>
  )
}

export default About