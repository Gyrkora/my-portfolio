import styled from 'styled-components';
import { Button } from '../../components/UI/Button';
import { Link as LinkScroll } from 'react-scroll';

export const ButtonOriginal = styled(Button)`
	margin: 3rem 0 1rem 0;
	padding: 0.5rem 5rem;
	color: #a93f55;
	border-color: ${(props) => props.bColor};
	cursor: pointer;
	border-radius: 1rem;
	border-width: 4px;
	border-style: solid;
	font-size: 1.5rem;

	background-color: #1d1d1d;

	@media (min-width: 768px) {
		transition: all 0.5s ease-in-out;

		&:hover {
			padding: 0.5rem ${(props) => props.pX};
		}
	}
`;

export const ButtonLinkHeader = styled(LinkScroll)``;

export const ButtonCardsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80px;
	max-width: 80%;
	flex-direction: column;

	@media (min-width: 1024px) {
		flex-direction: row;
	}
`;

export const ButtonBackCards = styled(ButtonOriginal)`
	padding: 12px 40px;
	margin: 10px;
	font-size: 15px;

	@media (min-width: 768px) {
		transition: all 0.5s ease-in-out;
		margin: 50px 10px 0 10px;

		&:hover {
			padding: 12px 40px;
		}
	}

	@media (max-width: 766px) {
		display: none;
	}
`;
export const ButtonFrontCards = styled(ButtonOriginal)`
	padding: 12px 30px;
	font-size: 15px;
	margin: 15px 10px 0 10px;
	color: #a93f55;

	/* @media (max-width: 766px) and (min-width: 600px) {
		flex-wrap: nowrap;
	} */

	@media (min-width: 768px) {
		transition: all 0.5s ease-in-out;
		margin: 50px 10px 0 10px;

		&:hover {
			padding: 12px 40px;
		}
	}

	@media (min-width: 1024px) {
		display: none;
	}

	/* @media (max-width: 766px) {
		display: flex;
	} */
`;

export const ButtonFrontMoreInfo = styled(ButtonFrontCards)`
	color: white !important;
	width: 150px;
	text-align: center;

	/* @media (min-width: 480px) {
		display: none;
	} */
`;

export const ButtonFrontCardsDesktopApps = styled(ButtonFrontCards)`
	@media (min-width: 769px) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
`;
