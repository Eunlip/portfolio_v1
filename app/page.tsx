import AboutMe from '@/components/about-me';
import ContactMe from '@/components/contact-me';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import Stats from '@/components/stats';
import Techstack from '@/components/techstacks';
import { TextEffect } from '@/components/ui/text-effect';

export default function Home() {
	return (
		<main className='container space-y-24 sm:space-y-44 mx-auto px-5 md:px-10 xl:px-56 2xl:px-80 '>
			<section id='home' className='pt-24 sm:pt-32 2xl:pt-44'>
				<div className='flex flex-col gap-5'>
					<TextEffect
						className='text-5xl font-bold text-center sm:text-start'
						as='h1'
						preset='blur'
						per='char'
						delay={0.5}
					>
						Hi Everyone,
					</TextEffect>

					<div className='relative flex flex-col sm:flex-row items-center gap-3'>
						<TextEffect
							className='relative text-5xl font-bold text-center sm:text-start'
							as='h1'
							preset='blur'
							per='char'
							delay={1}
						>
							I&apos;m
						</TextEffect>
						<TextEffect
							className='relative text-5xl font-bold text-emerald-100 text-center sm:text-start w-72 sm:w-full leading-snug sm:leading-normal'
							as='h1'
							preset='blur'
							per='char'
							delay={1.2}
						>
							Muhamad Alif Pahreza
						</TextEffect>
					</div>
				</div>
				<AboutMe />
				<Stats />
			</section>

			<section id='techstack'>
				<Techstack />
			</section>
			<section id='experience'>
				<Experience />
			</section>
			<section id='projects'>
				<Projects />
			</section>
			<section id='contactme' className=' py-4'>
				<ContactMe />
			</section>
			<Footer />
		</main>
	);
}
