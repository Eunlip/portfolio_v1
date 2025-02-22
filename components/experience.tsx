'use client';

import { experience } from '@/constant';
import Image from 'next/image';
import { InView } from './ui/in-view';
import { motion } from 'motion/react';

export default function Experience() {
	return (
		<InView
			viewOptions={{ once: true, margin: '0px 0px -300px 0px' }}
			variants={{
				hidden: {
					opacity: 0,
					y: 100,
					filter: 'blur(4px)',
				},
				visible: {
					opacity: 1,
					y: 0,
					filter: 'blur(0px)',
					transition: {
						duration: 0.5,
					},
				},
			}}
		>
			<motion.h1
				className='text-2xl mb-8 text-center sm:text-justify font-semibold'
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				Experience
			</motion.h1>
			<motion.div
				variants={{
					hidden: { opacity: 0 },
					visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
				}}
				className='space-y-5'
			>
				{experience.map((exp, i) => (
					<motion.div
						variants={{
							hidden: {
								opacity: 0,
								translateX: i === 0 ? 50 : -50,
								filter: 'blur(4px)',
							},
							visible: {
								opacity: 1,
								translateX: 0,
								filter: 'blur(0px)',
								transition: {
									duration: 0.5,
									delay: i === 0 ? 0.5 : 1,
								},
							},
						}}
						key={exp.company}
						className='border-b pb-5 border-line'
					>
						<div className='flex flex-col sm:flex-row justify-between sm:items-center'>
							<div className='flex flex-col'>
								<div className='flex items-center space-x-2'>
									<Image
										src={exp.logo}
										alt='logo dicoding'
										width='25'
										height='25'
										className='rounded-full'
										loading='lazy'
										draggable={false}
									/>
									<h2 className='font-bold text-xl sm:text-lg text-foreground-700'>
										{exp.company}
									</h2>
								</div>
								<p className='mx-[33px] text-gray text-base sm:text-sm'>{exp.role}</p>
							</div>
							<p className='mx-[33px] text-secondary sm:mx-0 text-sm'>{exp.date}</p>
						</div>
						<p className='mx-[33px] mt-5 text-wrap text-secondary text-xl'>{exp.description}</p>
					</motion.div>
				))}
			</motion.div>
		</InView>
	);
}
