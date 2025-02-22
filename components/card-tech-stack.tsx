'use client';

import { Card, CardBody } from '@heroui/react';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Spotlight } from './ui/spotlight';
import { motion } from 'motion/react';

type CardTechStackProps = Readonly<{
	techstack: {
		logo: string | ReactElement;
		title: string;
		description: string;
		link: string;
	};
}>;

export default function CardTechStack({ techstack }: CardTechStackProps) {
	return (
		<Link
			href={techstack.link}
			target='_blank'
			className='relative overflow-hidden rounded-lg p-[0.95px]'
		>
			<Spotlight
				className='from-teal-600 via-teal-800 to-teal-600 blur-3xl dark:from-teal-500 dark:via-teal-600 dark:to-teal-700'
				size={200}
			/>
			<motion.div
				variants={{
					hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
					visible: {
						opacity: 1,
						scale: 1,
						filter: 'blur(0px)',
					},
				}}
			>
				<Card className=' bg-gradient-to-tr from-[#202020] to-[#1F1F1F] border border-[#2E2E2E] rounded-lg cursor-default'>
					<CardBody className='flex flex-row items-center gap-3'>
						<div className='bg-gradient-to-tr from-[#282828] to-[#373737] rounded-lg p-2'>
							{techstack.logo}
						</div>
						<div>
							<h2 className='text-xl sm:text-base'>{techstack.title}</h2>
							<p className='text-gray text-lg sm:text-sm'>{techstack.description}</p>
						</div>
					</CardBody>
				</Card>
			</motion.div>
		</Link>
	);
}
