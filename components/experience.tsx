import { experience } from '@/constant';

export default function Experience() {
	return (
		<div className='space-y-10'>
			<h1 className='text-2xl font-semibold'>Experience</h1>
			<div className='border-y border-line py-10 space-y-10'>
				{experience.map((exp) => (
					<div key={exp.company}>
						<div className='flex justify-between items-center'>
							<div className='flex flex-col'>
								<div className='flex items-center space-x-2'>
									<p className='text-[#00FF9D] text-xl'>⦁</p>
									<h2 className='font-bold text-lg'>{exp.company}</h2>
								</div>
								<p className='mx-[21px] text-gray text-sm'>{exp.role}</p>
							</div>
							<p className='text-sm'>{exp.date}</p>
						</div>
						<p className='mx-[21px]  mt-5 max-w-[34rem] text-wrap text-secondary text-sm font-normal'>
							{exp.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
