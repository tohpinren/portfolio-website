import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col item-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-lg sm:text-2xl'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-blue-600 capitalize dark:text-blue-500'>@ {company}</a></h3>
            <span className='capitalize font-medium text-xs sm:text-base text-dark/75'>
                {time} | {address}
            </span>
            <br />
            <p className='list-disc pl-6 text-xs sm:text-base'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='mt-10 mb-20'>
        <h2 className='font-bold text-2xl sm:text-3xl mb-10 w-full text-center'>Experience</h2>

        <div ref={ref} className='w-[75%] mx-auto relative'>

            <motion.div
            style={{scaleY: scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-black origin-top dark:bg-white'/>

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details 
                position={'Software Engineering Intern'}
                company={'Kipo AI'}
                companyLink={'https://kipoparts.com/'}
                time={'Jan 2024 - Present'}
                address={'San Francisco, California, USA'}
                work={'Kipo AI is a startup developing a unified platform to simplify hardware parts discovery, enabling users to find parts instantly instead of searching across multiple sources.'}
                />
                <Details 
                position={'Software Engineer'}
                company={'Marymount Labs'}
                companyLink={'https://marymountlabs.com/'}
                time={'Jan 2023 - Oct 2023'}
                address={'Singapore'}
                work={'Marymount Labs is a startup that develops digital infrastructure and AI-powered solutions to transform primary care, enabling continuous remote health monitoring and personalized preventive healthcare.'}
                />
                <Details 
                position={'Teaching Assistant'}
                company={'National University of Singapore'}
                companyLink={'https://nus.edu.sg/'}
                time={'Aug 2023 - Nov 2023'}
                address={'Singapore'}
                work={['CS1101S Programming Methodology I']}
                />
                <Details 
                position={'Product Management Intern'}
                company={'Yindii (NOC Bangkok)'}
                companyLink={'https://www.yindii.co/'}
                time={'May 2023 - Aug 2023'}
                address={'Bangkok, Thailand'}
                work={'Yindii is a surplus food startup that connects consumers with restaurants and stores to purchase unsold food at discounted prices, helping to reduce food waste and environmental impact.'}
                />
                <Details 
                position={'Data Analyst'}
                company={'i-CARE Primary Care Network'}
                companyLink={'https://www.icarepcn.com/'}
                time={'Feb 2022 - Jun 2022'}
                address={'Singapore'}
                work={'i-CARE Primary Care Network is a network of GP clinics in Singapore aimed at delivering better and more holistic chronic care to patients in the community.'}
                />
                <Details 
                position={'Assistant Software Engineer'}
                company={'NEC Asia Pacific'}
                companyLink={'https://sg.nec.com/'}
                time={'Nov 2021 - Jan 2022'}
                address={'Singapore'}
                work={'NEC Asia Pacific is a leading provider of information technology solutions and services, serving as the regional headquarters for NEC Corporation in the Asia Pacific region.'}
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience
