import { Button } from '@heroui/react';
import { FileDown } from 'lucide-react';
import React from 'react';

export default function ButtonCTA() {
	return (
		<Button
			endContent={<FileDown className='w-5 h-5' />}
			className='border border-emerald-100 bg-transparent text-emerald-100 rounded-lg font-bold px-6 py-6 text-base hover:bg-emerald-100 hover:text-black hover:bg-opacity-100 transition-all duration-1000 ease-in-out'
		>
			Here&apos;s my CV
		</Button>
	);
}
