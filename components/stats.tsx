'use client';

import { stats } from '@/constant';
import { motion } from 'framer-motion';

export default function Stats() {
	return (
		<div className='relative'>
			<motion.div
				initial={{ height: 0, opacity: 0, translateY: -50 }}
				animate={{ height: '1%', opacity: 1, translateY: 0 }}
				transition={{ duration: 1, delay: 2.5 }}
				className='absolute top-0 left-0 right-0 bg-line/40'
			/>
			<motion.div
				initial={{ height: 0, opacity: 0, translateY: 50 }}
				animate={{ height: '1%', opacity: 1, translateY: 0 }}
				transition={{ duration: 1, delay: 2.5 }}
				className='absolute bottom-0 left-0 right-0 bg-line/40'
			/>
			<motion.div
				initial={{ opacity: 0, translateY: -50 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ staggerChildren: 0.5, delay: 2.5 }}
				className='flex sm:flex-row flex-col gap-10 sm:gap-0 justify-between items-center py-10'
			>
				{stats.map((stat, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, translateY: -50 }}
						animate={{ opacity: 1, translateY: 0 }}
						transition={{ duration: 1, delay: 3 }}
						className='flex flex-col items-center space-y-5 sm:space-y-3'
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 3.5 }}
							className='text-5xl sm:text-4xl'
						>
							{stat.value}
						</motion.div>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 3.5 }}
							className='text-xl text-secondary'
						>
							{stat.title}
						</motion.p>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
