import React, { useState } from 'react';
import { SectionContainer } from '../styles/UI/SectionContainer.styles';
import {
	FormContainer,
	FormInnerContainer,
	InputField,
	InputGroup,
	SubmitButton,
	TextAreaContainer,
	TextAreaField,
} from '../styles/Contact.styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [buttonState, setButtonState] = useState('Send Message');
	const [emailSent, setEmailSent] = useState(false); // New state to track email sent status

	const formik = useFormik({
		// client-side form validation.
		//we have created our initailValues object in a format EmailJS accepts
		initialValues: {
			from_name: '', //user name
			to_name: process.env.REACT_APP_ADMIN_EMAIL, //email id of the admin
			subject: '', // subject of email
			reply_to: '', // user email
			message: '', // message of email
		},
		validationSchema: Yup.object({
			from_name: Yup.string().required('* Name field is required'),
			subject: Yup.string().required('* Subject field is required'),
			reply_to: Yup.string()
				.email('Invalid email address')
				.required('* Email field is required'),
			message: Yup.string().required('* Message field is required'),
		}),

		onSubmit: (values, { setSubmitting, resetForm }) => {
			try {
				emailjs
					.send(
						process.env.REACT_APP_FORMIK_SERVICE_ID,
						process.env.REACT_APP_FORMIK_TEMPLATE_ID,
						values,
						process.env.REACT_APP_FORMIK_PUBLIC_KEY
					)
					.then(() => {
						setButtonState('Send Email');
						setSubmitting(false);
						setButtonState('Message Sent');
						setEmailSent(true);
						setTimeout(() => {
							setEmailSent(false);
						}, 3000);

						resetForm();
						console.log('SUCCESS!');
					});
			} catch (error) {
				setButtonState('Send Email');
				setSubmitting(false);
				console.log('FAILED...', error.text);
			}
		},
	});

	return (
		<SectionContainer id="contact">
			<h3>Contact me:</h3>

			<FormContainer>
				<form onSubmit={formik.handleSubmit}>
					{
						<FormInnerContainer>
							<InputGroup>
								{/* name */}
								<InputField
									id="from_name"
									name="from_name"
									type="text"
									autoComplete="off"
									placeholder="NAME"
									onChange={formik.handleChange}
									value={formik.values.from_name}
									required
								/>
								{/* email */}
								<InputField
									id="reply_to"
									type="email"
									name="reply_to"
									placeholder="EMAIL"
									autoComplete="off"
									onChange={formik.handleChange}
									value={formik.values.reply_to}
									required
								/>
							</InputGroup>
							<InputGroup>
								{/* subject */}
								<InputField
									id="subject"
									name="subject"
									type="text"
									autoComplete="off"
									placeholder="SUBJECT"
									onChange={formik.handleChange}
									value={formik.values.subject}
									required
								/>
							</InputGroup>
							<TextAreaContainer>
								<TextAreaField
									id="message"
									name="message"
									placeholder="MESSAGE"
									autoComplete="off"
									onChange={formik.handleChange}
									value={formik.values.message}
									required
								/>
							</TextAreaContainer>
							<SubmitButton type="submit" disabled={formik.isSubmitting}>
								<span>{buttonState}</span>
							</SubmitButton>
							{emailSent && (
								<div style={{ color: 'green' }}>
									Your email has been successfully sent!
								</div>
							)}{' '}
						</FormInnerContainer>
					}
				</form>
			</FormContainer>
		</SectionContainer>
	);
};

export default Contact;
