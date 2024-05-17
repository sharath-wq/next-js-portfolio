'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

const Intro = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const { ref } = useSectionInView('Home', 0.5);
    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image
                            src={'https://avatars.githubusercontent.com/u/75419524?v=4'}
                            alt='X portriat'
                            width={198}
                            height={198}
                            quality='95'
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        className='absolute bottom-0 right-0  text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 150,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            {/* IMPORTANT: Change the Intro content */}
            <motion.h1
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hello, I'am Sharath Chandran.</span> I'am a{' '}
                <span className='font-bold'>self-taught </span>
                <span className='font-bold'>mern-stack developer</span> form India. I enjoy building{' '}
                <span className='italic'>sites & apps</span>. My focus is{' '}
                <span className='underline'>React (Next.js), Node.js</span>.
            </motion.h1>

            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                <Link
                    href='#contact'
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>
                <a
                    href='https://drive.google.com/file/d/1WULfZn0ZD7am2gM2cYdS6DDUnO-AByJh/view?usp=sharing'
                    download
                    className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                >
                    Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>
                <div className='flex gap-2'>
                    <a
                        href='https://www.linkedin.com/in/sharathchandranp/'
                        target='_blank'
                        className='bg-white p-4 flex items-center text-gray-700 gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href='https://github.com/sharath-wq'
                        target='_blank'
                        className='bg-white p-4 flex items-center text-gray-700 gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    >
                        <FaGithubSquare />
                    </a>
                    <a
                        href='https://leetcode.com/u/chandranpsharath/'
                        target='_blank'
                        className='bg-white p-4 flex items-center text-gray-700 gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    >
                        <SiLeetcode />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Intro;
