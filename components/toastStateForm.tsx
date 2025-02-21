'use action';

import { Alert } from '@heroui/react';
import React, { useEffect, useState } from 'react';

interface ToastState {
	message: string;
}

export default function ToastStateForm(state: Readonly<ToastState>) {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div className='fixed bottom-0 right-0 p-4'>
			<Alert
				color={state.message.includes('try again') ? 'danger' : 'success'}
				isVisible={isVisible}
				title={state.message}
				variant='faded'
				onClose={() => setIsVisible(false)}
			/>
		</div>
	);
}
