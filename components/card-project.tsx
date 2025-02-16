import { Card, CardBody, CardFooter } from '@heroui/react';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

export type ProjectProps = Readonly<{
	title: string;
	subTitle?: string;
	techstack: string | ReactElement[];
	category: string[];
	link: string;
	github?: string;
	img: string;
}>;

export default function CardProject({
	title,
	subTitle,
	techstack,
	category,
	link,
	github,
	img,
}: ProjectProps) {
	return (
		<Card
			shadow='sm'
			className='rounded-lg group bg-gradient-to-tr from-[#161616] to-[#101010] border border-[#2E2E2E] w-full  shadow-large shadow-black'
		>
			<CardBody className='overflow-visible space-y-3 p-0'>
				<Image
					alt={title}
					className='w-full p-2 object-cover h-52 group-hover:scale-110 transform transition-transform duration-500 ease-in-out shadow-md shadow-[#121515]'
					src={img}
					width={300}
					height={300}
					loading='eager'
				/>
				<div className='space-y-1 px-3 flex items-center justify-between'>
					<div>
						<b className='text-xl'>{title}</b>
						<p className='text-xs text-gray'>{subTitle && `(${subTitle})`}</p>
					</div>
					<div className='flex gap-2'>
						{category.map((p) => (
							<div
								key={p}
								className='px-2 bg-emerald-700 border border-emerald-500 rounded-full text-[10px] font-bold'
							>
								{p}
							</div>
						))}
					</div>
				</div>
			</CardBody>
			<CardFooter className='my-2 flex items-center justify-between'>
				{techstack}
				<div className='flex items-center justify-center gap-3'>
					{github && (
						<Link href={github} target='_blank' className='hover:opacity-85'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								x='0px'
								y='0px'
								width='20'
								height='20'
								viewBox='0,0,256,256'
							>
								<g
									fill='#fffafa'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{ mixBlendMode: 'normal' }}
								>
									<path
										d='M128,256c-70.69245,0 -128,-57.30755 -128,-128v0c0,-70.69245 57.30755,-128 128,-128v0c70.69245,0 128,57.30755 128,128v0c0,70.69245 -57.30755,128 -128,128z'
										id='shape'
									></path>
								</g>
								<g
									fill='#000000'
									fillRule='nonzero'
									stroke='none'
									strokeWidth='1'
									strokeLinecap='butt'
									strokeLinejoin='miter'
									strokeMiterlimit='10'
									strokeDasharray=''
									strokeDashoffset='0'
									fontFamily='none'
									fontWeight='none'
									fontSize='none'
									textAnchor='none'
									style={{ mixBlendMode: 'normal' }}
								>
									<g transform='scale(16,16)'>
										<path d='M8,0c-4.4,0 -8,3.6 -8,8c0,3.526 2.315,6.534 5.498,7.591c0.377,0.055 0.52,-0.179 0.52,-0.385c0,-0.19 -0.007,-0.693 -0.011,-1.361c-2.225,0.483 -2.695,-1.072 -2.695,-1.072c-0.364,-0.924 -0.888,-1.17 -0.888,-1.17c-0.726,-0.496 0.055,-0.486 0.055,-0.486c0.803,0.057 1.225,0.824 1.225,0.824c0.714,1.223 1.872,0.87 2.328,0.665c0.073,-0.517 0.279,-0.87 0.508,-1.069c-1.776,-0.202 -3.644,-0.888 -3.644,-3.954c0,-0.873 0.312,-1.587 0.823,-2.147c-0.082,-0.203 -0.357,-1.017 0.079,-2.118c0,0 0.672,-0.215 2.2,0.82c0.638,-0.177 1.322,-0.266 2.002,-0.269c0.679,0.003 1.364,0.092 2.003,0.269c1.527,-1.035 2.198,-0.82 2.198,-0.82c0.436,1.101 0.162,1.915 0.08,2.117c0.513,0.559 0.822,1.273 0.822,2.147c0,3.073 -1.87,3.75 -3.653,3.948c0.287,0.247 0.543,0.735 0.543,1.482c0,1.07 -0.01,1.932 -0.01,2.195c0,0.208 0.141,0.443 0.521,0.385c3.182,-1.06 5.496,-4.066 5.496,-7.592c0,-4.4 -3.6,-8 -8,-8z'></path>
									</g>
								</g>
							</svg>
						</Link>
					)}
					{link && (
						<Link href={link} target='_blank' className='hover:opacity-85'>
							<SquareArrowOutUpRight className='w-5 h-5' />
						</Link>
					)}
				</div>
			</CardFooter>
		</Card>
	);
}
