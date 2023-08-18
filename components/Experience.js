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
            <ul className='list-disc pl-6 text-xs sm:text-base'>
                {work.map((point, index) => (
                    <li key={index} className='font-medium w-full'>
                        {point}
                    </li>
                ))}
            </ul>
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
                position={'Software Engineer'}
                company={'Marymount Labs'}
                companyLink={'https://marymountlabs.com/'}
                time={'Jan 2023 - Present'}
                address={'Singapore'}
                work={
                ['Developed a clinical management tool, improving speed of clinical data entry by 2-3 times',
                'Engineered an app for healthcare professionals to upload clinical data and query database using dropdown boxes or natural language with the use of HuggingFace AI for natural language to SQL query conversion',
                'Architectured backend business logic for E-Vaccination application, empowering doctors to effortlessly evaluate eligibility and provide personalised vaccinations recommendations for optimal patient care',
                'Built an app to for two way batch messaging using Twilio to allow clinics to send reminders, schedule appointments and follow up on patients seamlessly'
                ]}
                />
                <Details 
                position={'Teaching Assistant'}
                company={'National University of Singapore'}
                companyLink={'https://nus.edu.sg/'}
                time={'Aug 2023 - Present'}
                address={'Singapore'}
                work={['CS1101S Programming Methodology I']}
                />
                <Details 
                position={'Product Management Intern'}
                company={'Yindii (NOC Bangkok)'}
                companyLink={'https://www.yindii.co/'}
                time={'May 2023 - Aug 2023'}
                address={'Bangkok, Thailand'}
                work={[
                'Spearheaded the plan for UI/UX configuration of the application which contributed to a 35% MoM orders growth and a 50% MoM revenue growth and being featured as the Apple App of the Day',
                'Streamlined operational processes by planning and executing a roadmap for an internal tracking, alerting and analytics platform and an operations website catering to all internal business needs',
                'Established and maintained an accurate and up-to-date company Wiki, including department-specific pages for enhanced accessibility and information sharing'
                ]}
                />
                <Details 
                position={'Data Analyst (Primary Care Coordinator)'}
                company={'i-CARE PCN'}
                companyLink={'https://www.icarepcn.com/'}
                time={'Feb 2022 - Jun 2022'}
                address={'Singapore'}
                work={[
                'Led the transition from legacy systems to automated programs to produce reports and presentations for clinic and PCN performance which accelerated the process more than 10 times',
                'Built programs in Python to visualise data, identify patterns and trends and coordinated with doctors and nurses to improve efficiency of the PCN',
                'Programmed Excel VBA macros for data validation, resulting in more accurate data collection and a reduction in macro runtime'
                ]}
                />
                <Details 
                position={'Assistant Software Engineer'}
                company={'NEC Asia Pacific'}
                companyLink={'https://sg.nec.com/'}
                time={'Nov 2021 - Jan 2022'}
                address={'Singapore'}
                work={[
                'Developed Web APIs in C# .NET such as watermarking, password generation and encryption for a specialised CRM system',
                'Performed tests on software using Postman to ensure quality and efficiency in implementation of software'
                ]}
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience