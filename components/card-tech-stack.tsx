import { Card, CardBody } from '@heroui/react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

type Props = Readonly<{
	techstack: {
		logo: string | ReactElement;
		title: string;
		description: string;
		link: string;
	};
}>;

export default function CardTechStack({ techstack }: Props) {
	return (
		<Link href={techstack.link} target='_blank'>
			<Card className='bg-gradient-to-tr from-[#202020] to-[#1F1F1F] border border-[#2E2E2E] rounded-lg hover:opacity-90 cursor-default'>
				<CardBody className='flex flex-row items-center gap-3'>
					<div className='bg-gradient-to-tr from-[#282828] to-[#373737] rounded-lg p-2'>
						{techstack.logo}
					</div>
					<div>
						<h2 className='text-base'>{techstack.title}</h2>
						<p className='text-gray text-sm'>{techstack.description}</p>
					</div>
				</CardBody>
			</Card>
		</Link>
	);
}
