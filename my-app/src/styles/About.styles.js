import styled from 'styled-components';

export const AboutTextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5rem 2rem;

	/* margin: 8rem 5rem; */
	/* margin: 3rem 3rem; */
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
`;
export const AboutText = styled.div`
	color: white;
	font-size: 23px;
	text-align: center;
	color: #4c86a8;

	@media (min-width: 768px) {
		font-size: 25px;
	}
`;
