'use client';

import { projects } from '@/constant';
import { Card, Chip, Pagination, Tab, Tabs } from '@heroui/react';
import { useState } from 'react';
import CardProject, { ProjectProps } from './card-project';

function tab(projects: ProjectProps[]): { key: string; title: string; count: number }[] {
	const categories = ['All', 'Website', 'Design', 'Mobile'];
	const counts = categories.map((category) => {
		if (category === 'All') {
			return projects.length;
		}
		return projects.filter((project) => project.category.includes(category)).length;
	});

	return categories.map((category, index) => ({
		key: category,
		title: category,
		count: counts[index],
	}));
}

export default function Projects() {
	const [selected, setSelected] = useState('all');
	const [page, setPage] = useState(1);
	const itemsPerPage = 4;

	const tabs = tab(projects);

	const filteredProjects = projects.filter((project) =>
		selected === 'All' ? true : project.category.includes(selected),
	);

	const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
	const paginatedProjects = filteredProjects.slice((page - 1) * itemsPerPage, page * itemsPerPage);

	const handleCategoryChange = (key: string) => {
		setSelected(key);
		setPage(1);
	};

	return (
		<div>
			<h1 className='text-2xl font-semibold text-center sm:text-start'>Projects</h1>
			<div className='flex w-full flex-col my-5'>
				<Tabs
					aria-label='Options'
					selectedKey={selected}
					onSelectionChange={(key) => handleCategoryChange(key.toString())}
					classNames={{
						tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-line',
						cursor: 'w-full bg-emerald-100',
						tab: 'max-w-fit px-0 h-12',
						tabContent: 'group-data-[selected=true]:text-emerald-100 text-foreground text-base',
					}}
					color='primary'
					variant='underlined'
				>
					{tabs.map((tab) => (
						<Tab
							key={tab.key}
							title={
								<div className='flex items-center space-x-2'>
									<span>{tab.title}</span>
									<Chip
										size='sm'
										className='group-data-[selected=true]:bg-emerald-600 bg-emerald-800 p-1 text-foreground'
									>
										{tab.count}
									</Chip>
								</div>
							}
						></Tab>
					))}
				</Tabs>
			</div>

			{paginatedProjects.length > 0 && (
				<div className='my-5 flex justify-center'>
					<Pagination
						showControls
						total={totalPages}
						page={page}
						onChange={setPage}
						classNames={{
							item: 'w-8 h-8 text-small rounded-md bg-transparent',
							cursor:
								'bg-gradient-to-l shadow-lg from-green-700 to-emerald-700 text-white font-bold',
						}}
					/>
				</div>
			)}

			<div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
				{paginatedProjects.length === 0 ? (
					<Card
						shadow='sm'
						className='col-span-2 rounded-lg group bg-gradient-to-tr from-[#161616] to-[#101010] border border-[#2E2E2E] w-full min-h-[320px] shadow-large shadow-black'
					>
						<div className='absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent opacity-60' />
						<div className='absolute -inset-0.5 bg-gradient-to-r from-emerald-600/20 to-green-600/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

						<div className='relative flex items-center justify-center h-full'>
							<span className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 animate-pulse'>
								Soon
							</span>
						</div>
					</Card>
				) : (
					paginatedProjects.map((project) => <CardProject key={project.title} {...project} />)
				)}
			</div>
		</div>
	);
}
