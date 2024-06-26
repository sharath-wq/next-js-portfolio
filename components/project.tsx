'use client';

import { ProjectProps } from '@/types';
import { useScroll, motion, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const Project = ({ title, description, tags, imageUrl, hostedLink, githubLink }: ProjectProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            className='group mb-3 sm:mb-8 last:mb-0 '
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            ref={ref}
        >
            <section className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'>
                <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] '>
                    <div className='flex gap-2'>
                        <h3 className='text-2xl font-semibold'>{title}</h3>
                        <Link href={hostedLink} target='_blank'>
                            <FaGlobe className='text-white/70' />
                        </Link>
                        <Link href={githubLink} target='_blank'>
                            <BsGithub className='text-white/70' />
                        </Link>
                    </div>
                    <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap mt-4 sm:mt-auto gap-2'>
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover: translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] transition group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                '
                />
            </section>
        </motion.div>
    );
};

export default Project;
