import { techstacks } from '@/constant';
import React from 'react';
import CardTechStack from './card-tech-stack';

export default function Techstack() {
	return (
		<div className='space-y-10'>
			<h1 className='text-2xl font-semibold'>Tech Stack That I Use</h1>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-x-[18px] gap-y-[26px]'>
				{techstacks.map((tech) => (
					<CardTechStack key={tech.title} techstack={tech} />
				))}
			</div>
		</div>
	);
}
