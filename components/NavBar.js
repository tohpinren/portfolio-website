"use client";

import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import Link from 'next/link'

const CustomLink = ({href, title, className=''}) => {
  return (
    <Link href={href} className={`${className} relative group`}>
        {title}
    </Link>
  )
}

const NavBar = ({darkMode, setDarkMode}) => {
  return (
    <header className='w-full px-32 py-8 text-xl text-black text-xl dark:text-white flex items-center justify-between'>
      <nav className=''>
        <CustomLink href='/' title='Home' className='mr-4'/>
        <CustomLink href='/about' title='About Me' className='mx-4'/>
        <CustomLink href='/projects' title='Projects' className='ml-4'/>
      </nav>

      <nav className=''>
        <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer'/>
      </nav>
    </header>
  )
}

export default NavBar