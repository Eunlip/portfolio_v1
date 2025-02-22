'use client';

import React from 'react';
import ButtonCTA from './cta';
import { motion } from 'motion/react';
import { TextLoop } from './ui/text-loop';

export default function AboutMe() {
	return (
		<div className='mt-7 mb-14 space-y-10 flex flex-col sm:block'>
			<motion.div
				initial={{ translateY: 20, opacity: 0 }}
				animate={{ translateY: 0, opacity: 1 }}
				transition={{
					ease: 'easeOut',
					duration: 1,
					delay: 2,
					type: 'tween',
				}}
				className='text-xl sm:text-lg text-center sm:text-justify leading-loose sm:leading-relaxed text-secondary'
			>
				I&apos;m a 6th-semester informatics engineering student focusing on{' '}
				<span className='text-emerald-300 font-bold'>Front End development</span> with a passion for
				creating innovative, creative, and effective solutions. My expertise is JavaScript and
				TypeScript. I have experience building website with various technologies such as
				<TextLoop
					className='px-1 overflow-y-clip font-bold text-white'
					transition={{
						type: 'spring',
						stiffness: 900,
						damping: 80,
						mass: 10,
						duration: 5,
					}}
					variants={{
						initial: {
							y: 20,
							rotateX: 90,
							opacity: 0,
							filter: 'blur(4px)',
						},
						animate: {
							y: 0,
							rotateX: 0,
							opacity: 1,
							filter: 'blur(0px)',
						},
						exit: {
							y: -20,
							rotateX: -90,
							opacity: 0,
							filter: 'blur(4px)',
						},
					}}
				>
					<span>Reactjs.</span>
					<span>Nextjs.</span>
					<span>TailwindCSS.</span>
					<span>and more..</span>
				</TextLoop>
			</motion.div>
			<motion.div
				initial={{ translateX: -30, opacity: 0 }}
				animate={{ translateX: 0, opacity: 1 }}
				transition={{ ease: 'easeOut', duration: 1, delay: 2.5, type: 'tween' }}
				className='w-full sm:w-fit text-center sm:text-start'
			>
				<ButtonCTA />
			</motion.div>
		</div>
	);
}
