import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
`;

export const FormInnerContainer = styled(Form)`
	width: 100%;
	max-width: 80%;
	position: relative;
`;

export const InputGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media (min-width: 750px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const InputField = styled(Field)`
	padding: 8px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 16px;
	width: 95%;
	margin-bottom: 16px;

	@media (min-width: 750px) {
		width: 100%;
	}
`;

export const TextAreaContainer = styled.div`
	width: 100%;
	margin-bottom: 16px;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;

	@media (min-width: 750px) {
		margin-bottom: 8px;
	}
`;

export const TextAreaField = styled(Field)`
	padding: 8px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 16px;
	flex: 1;
`;

export const FullWidthTextArea = styled.textarea`
	resize: vertical;
	box-sizing: border-box;
`;

export const ErrorMessageText = styled(ErrorMessage)`
	color: red;
`;

export const SubmitButton = styled.button`
	background-color: transparent;
	color: #a93f55;
	padding: 12px 50px;
	border: 4px solid #a93f55;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;

	@media (min-width: 750px) {
		position: absolute;
		right: 0;
		margin-top: 25px;
	}
`;
