import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	email: Yup.string().email('Invalid email').required('Email is required'),
	message: Yup.string().required('Message is required'),
});

const Contact = () => {
	// const [projects, setProjects] = useState([]);
	// useEffect(() => {
	// 	fetch('http://localhost:3001/api')
	// 		.then((res) => res.json())
	// 		.then((data) => setProjects(data.projects));
	// }, []);

	// useEffect(() => {
	// 	getQuote();
	// }, []);
	// function getQuote() {
	// 	axios
	// 		.get('http://localhost:3001/api', { crossdomain: true })
	// 		.then((response) => {
	// 			setProjects(response.data);
	// 			// console.log(projects._id);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error fetching data:', error);
	// 		});
	// }

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
			<h3>Contact me:</h3>

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

			{/* <h5>
				{console.log(projects)}
				{projects && projects.length > 0 ? (
					projects.map((data) => <li key={data._id}>{data.name}</li>)
				) : (
					<p>No projects to display</p>
				)}
			</h5> */}
		</SectionContainer>
	);
};

export default Contact;
