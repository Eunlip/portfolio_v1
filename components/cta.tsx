import { Button } from '@heroui/react';
import { FileDown } from 'lucide-react';
import React from 'react';
import { Magnetic } from './ui/magnetic';

export default function ButtonCTA() {
	return (
		<Magnetic>
			<Button
				endContent={<FileDown className='w-5 h-5' />}
				className='rounded-lg border border-emerald-100 bg-transparent text-emerald-100 font-bold px-6 py-6 text-base hover:bg-gradient-to-tl from-emerald-400 via-emerald-600 to-emerald-200 hover:text-white hover:bg-opacity-100'
			>
				Here&apos;s my CV
			</Button>
		</Magnetic>
	);
}
