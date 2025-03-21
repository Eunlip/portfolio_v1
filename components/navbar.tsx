'use client';

import { navbarMenu } from '@/constant';
import {
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NavbarParrent,
} from '@heroui/react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<motion.div
			initial={{ translateY: -100 }}
			animate={{ translateY: 0 }}
			transition={{ ease: 'easeOut', duration: 0.5, type: 'tween' }}
			className='bg-red-500 fixed top-0 z-50 w-full rounded-full'
		>
			<NavbarParrent
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={() => setIsMenuOpen(!isMenuOpen)}
				className='bg-[#000000]/50 fixed top-0 font-bold sm:rounded-full w-screen sm:w-fit sm:mx-auto border border-[#515151] shadow-xl sm:top-4 '
			>
				<NavbarContent>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className='sm:hidden'
						onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu
					/>
				</NavbarContent>
				{navbarMenu.map((item, i) => (
					<NavbarContent key={i} className='hidden sm:flex'>
						<NavbarItem className='mx-2'>
							<ScrollLink
								to={item.link}
								smooth={true}
								offset={-100}
								duration={500}
								className='cursor-pointer transition-colors duration-300 hover:text-emerald-400'
								activeClass='text-emerald-500'
							>
								{item.title}
							</ScrollLink>
						</NavbarItem>
					</NavbarContent>
				))}
				<NavbarMenu className='max-h-52'>
					{navbarMenu.map((item, i) => (
						<NavbarMenuItem key={i}>
							<ScrollLink
								to={item.link}
								smooth={true}
								offset={-100}
								duration={500}
								className='cursor-pointer transition-colors duration-300 hover:text-emerald-400'
								activeClass='text-emerald-500'
								onClick={() => setIsMenuOpen(false)} // Tutup menu saat item diklik
							>
								{item.title}
							</ScrollLink>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</NavbarParrent>
		</motion.div>
	);
}
