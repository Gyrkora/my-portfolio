import styled from 'styled-components';
import Container from '../components/UI/Container';

export const SkillContainer = styled.div`
	background-color: #1d1d1d;
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	width: 10rem;
	max-width: 95%;
	height: 10rem;
	max-height: 95%;
	margin: 0 1.5rem;
	border-radius: 1rem;
	background-color: black;
`;

export const SkillCard = styled(Container)`
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	width: 8rem;
	height: 8rem;
	padding-bottom: 1em;
	max-height: 95%;
	margin: 0 1.5rem;
	border-radius: 1rem;
	background-color: black;

	p {
		color: white;
	}

	img {
		width: 15vmin;
		height: 15vmin;

		//breakpoints
		@media (min-width: 480px) {
			width: 9vmin;
			height: 9vmin;
		}

		@media (min-width: 768px) {
			width: 8vmin;
			height: 8vmin;
			/* padding-bottom: 6rem; */
		}
	}

	@media (max-width: 488px) {
		display: none;
	}
`;
