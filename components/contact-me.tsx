import FormContactMe from './form-contact-me';

export default function ContactMe() {
	return (
		<div className='space-y-10 py-10'>
			<div className='flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-10'>
				<div className='flex-col space-y-5'>
					<h1 className='text-2xl font-semibold text-center sm:text-start'>Contact Me</h1>
					<div className='space-y-2'>
						<h2 className='text-gray text-lg font-bold text-center sm:text-start'>
							Don&apos;t be Shy
						</h2>
						<p className='text-secondary sm:w-52 text-center sm:text-start'>
							I am always open to discussing new projects. <br />
							So, feel free to contact me
						</p>
					</div>
				</div>
				<div className='w-full'>
					<FormContactMe />
				</div>
			</div>
		</div>
	);
}
