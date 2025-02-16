import { stats } from '@/constant';
import React from 'react';

export default function Stats() {
	return (
		<div className='flex justify-between items-center border-b py-16 border-line'>
			{stats.map((stat) => (
				<div key={stat.title} className='flex flex-col space-y-5'>
					<h1 className='font-mochiy text-4xl'>{stat.value}</h1>
					<p className='text-xl text-secondary'>{stat.title}</p>
				</div>
			))}
		</div>
	);
}
