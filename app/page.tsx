import ButtonCTA from '@/components/cta';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Stats from '@/components/stats';
import Techstack from '@/components/techstacks';

export default function Home() {
	return (
		<main className='mt-20 space-y-24 container mx-auto px-0 md:px-32 xl:px-64 2xl:px-96 '>
			<section className=''>
				<h1 className='text-4xl font-bold leading-relaxed'>
					Hi Everyone👋, <br />
					I&apos;m{' '}
					<span className='text-emerald-200 font-normal font-mochiy'>Muhamad Alif Pahreza</span>
				</h1>

				{/* About Me */}
				<div className='mt-5 mb-10 space-y-7'>
					<p className='text-lg leading-normal text-secondary text-justify'>
						I&apos;m a 6th semester informatics engineering student focusing on{' '}
						<span className='text-emerald-300 font-bold'>Front End developer</span> with a passion
						for creating innovative, creative, and effective solutions. My expertise is JavaScript
						and TypeScript. I have experience building website with various technologies such as
						Reactjs, Nextjs, TailwindCSS, and more.
					</p>
					{/* <p className='text-lg leading-normal text-secondary'></p> */}
					<ButtonCTA />
				</div>
				<Stats />
			</section>

			<Techstack />
			<Projects />
			<Experience />
		</main>
	);
}
