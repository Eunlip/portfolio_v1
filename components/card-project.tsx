import { Card, CardBody, CardFooter } from '@heroui/react';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Spotlight } from './ui/spotlight';
import { motion } from 'motion/react';

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
		<div className='p-[1px] rounded-lg'>
			<Spotlight
				className='from-teal-600 via-teal-800 to-teal-600 blur-3xl dark:from-teal-500 dark:via-teal-600 dark:to-teal-700'
				size={200}
			/>
			<motion.div
				variants={{
					hidden: {
						opacity: 0,
						scale: 0.95,
						translateX: -50,
						translateY: -50,
						filter: 'blur(4px)',
					},
					visible: {
						opacity: 1,
						scale: 1,
						translateX: 0,
						translateY: 0,
						filter: 'blur(0px)',
						transition: {
							duration: 0.5,
							staggerChildren: 0.5,
						},
					},
				}}
			>
				<Card
					shadow='sm'
					className='rounded-lg group bg-gradient-to-tr from-[#161616] to-[#000000]/80 border border-[#2E2E2E] w-full shadow-large shadow-black'
				>
					<CardBody className='overflow-visible space-y-3 p-0'>
						<Image
							alt={title}
							className='w-full rounded-t-xl p-2 object-cover h-52 group-hover:scale-110 transform transition-transform duration-500 ease-in-out shadow-md shadow-[#121515]'
							src={img}
							width={300}
							height={300}
							loading='eager'
							draggable={false}
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
						<div className='flex items-center justify-center gap-1'>
							{github && (
								<Link href={github} target='_blank' className='hover:opacity-85'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										x='0px'
										y='0px'
										width='30'
										height='30'
										viewBox='0,0,256,256'
									>
										<g
											fill='#ffffff'
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
											<g transform='scale(4,4)'>
												<path d='M32,10c-12.15,0 -22,9.85 -22,22c0,12.15 9.85,22 22,22c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM32,14c9.941,0 18,8.059 18,18c0,8.23871 -5.54128,15.16934 -13.0957,17.30664c-0.0928,-0.19124 -0.15645,-0.40072 -0.15039,-0.63867c0.031,-1.209 0,-4.03041 0,-5.06641c0,-1.778 -1.125,-3.03906 -1.125,-3.03906c0,0 8.82422,0.09959 8.82422,-9.31641c0,-3.633 -1.89844,-5.52539 -1.89844,-5.52539c0,0 0.9973,-3.87844 -0.3457,-5.52344c-1.505,-0.163 -4.20056,1.43755 -5.35156,2.18555c0,0 -1.82342,-0.74805 -4.85742,-0.74805c-3.034,0 -4.85742,0.74805 -4.85742,0.74805c-1.151,-0.748 -3.84656,-2.34755 -5.35156,-2.18555c-1.342,1.645 -0.3457,5.52344 -0.3457,5.52344c0,0 -1.89844,1.89044 -1.89844,5.52344c0,9.416 8.82422,9.31836 8.82422,9.31836c0,0 -1.00476,1.14381 -1.10547,2.7832c-0.58969,0.20793 -1.39349,0.45313 -2.16016,0.45313c-1.85,0 -3.25548,-1.79691 -3.77148,-2.62891c-0.508,-0.821 -1.54948,-1.50977 -2.52148,-1.50977c-0.64,0 -0.95312,0.3215 -0.95312,0.6875c0,0.366 0.89823,0.62083 1.49023,1.29883c1.248,1.43 1.22488,4.64648 5.67188,4.64648c0.5258,0 1.47056,-0.1211 2.22461,-0.22461c-0.00417,1.00955 -0.0159,1.97778 0,2.59766c0.00586,0.23869 -0.05897,0.44894 -0.15234,0.64063c-7.55349,-2.1379 -13.09375,-9.0686 -13.09375,-17.30664c0,-9.941 8.059,-18 18,-18z'></path>
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
			</motion.div>
		</div>
	);
}
