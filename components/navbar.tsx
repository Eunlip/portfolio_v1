import { Navbar as NavbarParrent, NavbarContent, NavbarItem } from '@heroui/react';
import Link from 'next/link';

export default function Navbar() {
	return (
		<NavbarParrent
			shouldHideOnScroll
			className='bg-[#211f1f] font-bold rounded-full w-fit px-5 mx-auto border border-[#515151] shadow-xl'
		>
			<NavbarContent className='space-x-3'>
				<NavbarItem>
					<Link href='/'>Home</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/techstack'>Tech Stack</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/projects'>Projects</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/experience'>Experience</Link>
				</NavbarItem>
				<NavbarItem>
					<Link href='/contactme'>Contact Me</Link>
				</NavbarItem>
			</NavbarContent>
		</NavbarParrent>
	);
}
