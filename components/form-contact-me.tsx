'use client';

import { sendEmail } from '@/actions/email';
import { Button, Form, Input, Textarea } from '@heroui/react';
import { useActionState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function FormContactMe() {
	const [state, formAction, isPending] = useActionState(sendEmail, null);

	useEffect(() => {
		if (state?.success) {
			toast.success(state.message, {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		} else if (state?.success === false || state?.error) {
			toast.error(state?.message ?? state?.error, {
				position: 'bottom-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: false,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}
	}, [state]);

	return (
		<Form action={formAction} className='space-y-2' validationBehavior='native'>
			<div className='flex flex-row items-center space-x-4 w-full'>
				<Input
					isRequired
					isClearable
					size='lg'
					radius='sm'
					errorMessage={({ validationDetails }) => {
						return validationDetails?.valueMissing && 'Please enter your name';
					}}
					name='name'
					placeholder='Name'
				/>
				<Input
					isRequired
					isClearable
					size='lg'
					radius='sm'
					errorMessage={({ validationDetails }) => {
						return validationDetails?.valueMissing && 'Please enter your email address';
					}}
					name='email'
					placeholder='Email'
				/>
			</div>
			<Input
				isRequired
				isClearable
				size='lg'
				radius='sm'
				errorMessage={({ validationDetails }) => {
					return validationDetails?.valueMissing && 'Please enter the subject';
				}}
				name='subject'
				placeholder='Subject'
			/>
			<Textarea
				isRequired
				isClearable
				classNames={{
					base: 'min-w-full',
					input: 'min-h-[120px] max-h-[120px]',
				}}
				size='lg'
				radius='sm'
				errorMessage={({ validationDetails }) => {
					return validationDetails?.valueMissing && 'Message cannot be empty';
				}}
				name='message'
				placeholder='Message..'
			/>
			<Button
				type='submit'
				isLoading={isPending}
				className='min-w-full font-bold bg-gradient-to-tr from-emerald-400 via-emerald-600 to-emerald-200'
				radius='sm'
			>
				{isPending ? 'Sending...' : 'Send Message'}
			</Button>
			{state?.error && <p className='text-red-500 text-sm'>{state.message}</p>}
		</Form>
	);
}
