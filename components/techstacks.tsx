import { techstacks } from '@/constant';
import CardTechStack from './card-tech-stack';
import { InView } from './ui/in-view';

export default function Techstack() {
	return (
		<InView
			viewOptions={{ once: true, margin: '0px 0px -200px 0px' }}
			variants={{
				hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
				visible: {
					opacity: 1,
					y: 0,
					filter: 'blur(0px)',
					transition: {
						staggerChildren: 0.1,
						duration: 0.5,
					},
				},
			}}
		>
			<h1 className='text-2xl mb-8 text-center sm:text-justify font-semibold'>
				Tech Stack That I Use
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-x-[18px] gap-y-[26px]'>
				{techstacks.map((tech) => (
					<CardTechStack key={tech.title} techstack={tech} />
				))}
			</div>
		</InView>
	);
}
