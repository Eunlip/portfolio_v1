'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(state: unknown, formData: FormData) {
	const data = Object.fromEntries(formData) as {
		name: string;
		email: string;
		subject: string;
		message: string;
	};

	if (!data.name || !data.email || !data.subject || !data.message) {
		throw new Error('Please fill in all fields');
	}

	try {
		const receiverEmail = process.env.EMAIL_RECEIVER;
		if (!receiverEmail) {
			console.error('EMAIL_RECEIVER is missing');
			return { error: 'Internal Server Error' };
		}

		const { error } = await resend.emails.send({
			from: `${data.name} <onboarding@resend.dev>`,
			replyTo: `${data.name} <${data.email}>`,
			to: receiverEmail,
			subject: data.subject,
			text: data.message,
		});

		if (error) {
			console.error('Resend error:', error);
			return { error: 'Failed to send email' };
		}

		return {
			success: true,
			message: 'Email sent successfully!',
		};
	} catch (error) {
		console.error('Failed to send email:', error);
		return {
			success: false,
			message: "Can't send email, please try again",
		};
	}
}
