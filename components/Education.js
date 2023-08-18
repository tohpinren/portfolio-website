import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({type, time, school, info}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-lg sm:text-2xl'>{school}</h3>
            <span className='capitalize text-xs sm:text-base font-medium text-dark/75'>
                {type} | {time}
            </span>
            <ul className='list-disc pl-6 text-xs sm:text-base'>
                {info.map((point, index) => (
                    <li key={index} className='font-medium w-full'>
                        {point}
                    </li>
                ))}
            </ul>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='mt-10 pb-60'>
        <h2 className='font-bold text-3xl mb-10 w-full text-center'>Education</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                type={'Bachelor of Computing in Computer Science'}
                time={'Aug 2022 - Apr 2026'}
                school={'National University of Singapore'}
                info={[
                'Grade: First Class Honours',
                'NOC Southeast Asia Bangkok',
                'CS1101S Programming Methodology I Teaching Assistant'
                ]}
                />
                <Details 
                type={'GCE A Level'}
                time={'Jan 2018 - Dec 2019'}
                school={'Anglo-Chinese Junior College'}
                info={[
                'RP: 87.5/90',
                'ACJC Scholastic Merit Award',
                "Top Students’ List for Promotional Examination"
                ]}
                />
            </ul>
        </div>
    </div>
  )
}

export default Education