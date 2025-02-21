'use client';

import { sendEmail } from '@/actions/email';
import { Button, Form, Input, Textarea } from '@heroui/react';
import { useActionState } from 'react';
import ToastStateForm from './toastStateForm';

export default function FormContactMe() {
	const [state, formAction, isPending] = useActionState(sendEmail, null);

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
			{state?.error && (
				<ToastStateForm message={state.message ?? "Can't send email, please try again"} />
			)}
			{state?.success && <ToastStateForm message={state.message ?? 'Email sent successfully'} />}
		</Form>
	);
}
