import React from 'react';
import { SectionContainer } from '../styles/UI/SectionContainer.styles';
import {
	FormContainer,
	FormInnerContainer,
	FullWidthTextArea,
	InputField,
	InputGroup,
	SubmitButton,
	TextAreaContainer,
	TextAreaField,
	ErrorMessageText,
} from '../styles/Contact.styles';

import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	message: Yup.string().required('Message is required'),
});

const Contact = () => {
	const initialValues = {
		name: '',
		email: '',
		subject: '',
		message: '',
	};

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<SectionContainer id="contact">
			<h3>Contact me</h3>

			<FormContainer>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({ errors, touched }) => (
						<FormInnerContainer>
							<InputGroup>
								<InputField
									type="text"
									id="name"
									name="name"
									placeholder="Name"
									required
								/>

								<InputField
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									required
								/>
							</InputGroup>

							<InputGroup>
								<InputField
									type="text"
									id="subject"
									name="subject"
									placeholder="Subject"
									required
								/>
							</InputGroup>

							<TextAreaContainer>
								<TextAreaField
									as={FullWidthTextArea}
									id="message"
									name="message"
									rows="5"
									placeholder="Message"
									required
								/>
							</TextAreaContainer>

							<SubmitButton type="submit">Send Message</SubmitButton>
						</FormInnerContainer>
					)}
				</Formik>
			</FormContainer>
		</SectionContainer>
	);
};

export default Contact;
