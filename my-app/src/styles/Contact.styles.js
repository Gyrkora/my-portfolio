import styled from 'styled-components';
// import { Form, Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
`;

export const FormInnerContainer = styled.div`
	position: relative;
	margin: 0 auto;

	@media (min-width: 750px) {
		width: 50rem;
		max-width: 90%;
	}
`;

export const InputGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	@media (min-width: 750px) {
		flex-direction: row;
		justify-content: space-between;
		gap: 20px; // This will create space between the child elements
		margin-bottom: 10px;
	}
`;

export const InputField = styled.input`
	padding: 8px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 16px;
	margin-bottom: 16px;
	background-color: #4a4f47;
	border-color: #4a4f47;
	height: 30px;
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);

	::placeholder {
		color: #cbc1c1;
		font-size: 13px;
	}

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

export const TextAreaField = styled.input`
	padding: 8px;
	border-radius: 4px;
	border: 1px solid #ccc;
	font-size: 16px;
	background-color: #4a4f47;
	border-color: #4a4f47;
	height: 60px;
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);

	::placeholder {
		color: #cbc1c1;
		font-size: 13px;
		margin: 0;
	}

	@media (min-width: 750px) {
		flex: 1;
		height: 70px;
	}
`;

export const FullWidthTextArea = styled.textarea`
	resize: vertical;
	box-sizing: border-box;
`;

// export const ErrorMessageText = styled(ErrorMessage)`
// 	color: red;
// `;

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
