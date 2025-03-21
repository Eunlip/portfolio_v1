'use client';

import { Button } from '@heroui/react';
import { FileDown } from 'lucide-react';
import { useState } from 'react';
import { Magnetic } from './ui/magnetic';

export default function ButtonCTA() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Magnetic>
				<Button
					onPress={() => setIsOpen(true)}
					endContent={<FileDown className='w-5 h-5' />}
					className='rounded-lg border border-emerald-100 bg-transparent text-emerald-100 font-bold px-6 py-6 text-base hover:bg-gradient-to-tl from-emerald-400 via-emerald-600 to-emerald-200 hover:text-white hover:bg-opacity-100'
				>
					Here&apos;s my CV
				</Button>
			</Magnetic>
			{isOpen && (
				<div className='fixed z-50 inset-0 bg-black bg-opacity-80 flex justify-center items-center'>
					<div className='w-full h-full flex flex-col justify-center items-center rounded-lg gap-2 overflow-hidden'>
						<button onClick={() => setIsOpen(false)} className='text-xl text-white mb-1'>
							Close
						</button>
						{typeof window !== 'undefined' && navigator.userAgent.includes('Mobi') ? (
							<a
								href='/cv/CV_SAYA(2025).pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='text-white bg-emerald-500 px-4 py-2 rounded-lg font-bold'
							>
								Buka CV
							</a>
						) : (
							<iframe
								src='/cv/CV_SAYA(2025).pdf'
								className='w-full h-[80vh] sm:w-5/6 sm:h-5/6'
								title='My CV'
							></iframe>
						)}
					</div>
				</div>
			)}
		</>
	);
}
