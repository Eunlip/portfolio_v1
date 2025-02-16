import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import { HeroUIProvider } from '@heroui/react';
import Navbar from '@/components/navbar';

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const metadata: Metadata = {
	title: 'Portfolio',
	description: 'A portfolio website for front-end developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${lato.className}  pt-6 pb-20 antialiased`}>
				<HeroUIProvider className='dark'>
					<Navbar />
					{children}
				</HeroUIProvider>
			</body>
		</html>
	);
}
