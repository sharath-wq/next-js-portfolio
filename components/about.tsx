'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            className=' max-w-[45rem] text-center leading-8 sm:mb-0 scroll-mt-28'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading text='About me' />
            {/* IMPORTANT: Change the About content */}
            <p className='mb-3'>
                After graduating with a degree in <span className='font-medium'>Bachelor of Computer Applications</span>, I
                decided to pursue my passion for programming. I enrolled in a self learning program and learned{' '}
                <span className='font-medium'>mern-stack web development</span>.{' '}
                <span className='italic'>My favorite part of programming</span> is the problem-solving aspect. I{' '}
                <span className='underline'>love</span> the feeling of finally figuring out a solution to a problem. My core
                stack is <span className='font-medium'>React, Next.js, Node.js, and MongoDB</span>. I am also familiar with
                TypeScript. I am always looking to learn new technologies. I am currently looking for a{' '}
                <span className='font-medium'>full-time position</span> as a software developer.
            </p>

            <p>
                I'm always open to meeting new people who share similar passions or have exciting projects in mind. If you'd
                like to get in touch, collaborate, or just have a friendly chat, don't hesitate to reach out through the
                contact form provided on this website.{' '}
            </p>
        </motion.section>
    );
};

export default About;
