import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

export const ProyectContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 90%;
	width: 700px;
	max-height: 95%;
	height: 40rem;

	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	margin: 0 1.5rem 70px 1.5rem;
	border-radius: 1rem;
	border-top: 2px solid #ebc331;
	background-color: #1d1d1d;
	transition: transform 0.5s;
	transform-style: preserve-3d;

	@media (min-width: 1400px) {
		max-width: 90%;
		width: 1000px;
	}

	@media (min-width: 1399px) {
		margin: 0.5rem 1.5rem;
	}

	@media (min-width: 1024px) {
		&:hover {
			transform: rotateY(180deg);
		}
	}
`;

export const ProyectContainerDesktopAppIndividual = styled(ProyectContainer)`
	border-top: 2px solid #4c86a8;
	height: 350px;
	/* border-bottom: 5px solid black; */
	position: relative !important;

	@media (min-width: 1024px) {
		&:hover {
			transform: none;
		}
	}
`;

// Contenedor que mantiene la tarjeta principal y el contenido deslizante
const CardWrapper = styled.div`
	position: relative;
	width: 375px; // Puedes ajustar el ancho según necesites
	display: flex;
	align-items: center;
	justify-content: center;
	/* border: 2px solid green; */
`;

// Componente de la tarjeta principal
const Card = styled.div`
	background: #1d1d1d;
	color: white;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 20px;
	cursor: pointer;
	z-index: 10; // Asegura que la tarjeta principal esté sobre el contenido deslizante
	position: relative;
	height: 300px;
	width: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

// Componente del contenido deslizante
const SlidingContent = styled.div`
	background-color: #1d1d1d;

	color: white;
	position: absolute;
	/* top: 100%; */
	/* top: -300px; */
	bottom: -292px;

	left: 0;
	width: 25%;
	left: 140px;
	height: 150px;
	color: white;
	transition: all 0.5s ease-in-out;
	transform: translateY(0);

	border-bottom: 10px solid grey;
	border-right: 1px solid grey;
	border-left: 1px solid grey;

	border-radius: 0 0 8px 8px;
	text-align: center;

	/* .key2 {
		position: relative;
		background-color: transparent;
		text-align: center;
		padding: 40px 0;
		user-select: none;
		cursor: pointer;

		&::before,
		&::after {
			content: '';
			position: absolute;
			bottom: -150px;
			width: 10px;
			height: 100%;
			background-color: #1d1d1d;
			border: 1px solid white;
		}

		&::before {
			right: 40px;
			width: 100px;
			border-top-left-radius: 20%;
		}
		&::after {
			right: -60px;
			width: 100px;
			border-top-right-radius: 20%;
			border-left-color: #1d1d1d;
		}
	} */

	${({ isOpen }) =>
		isOpen &&
		css`
			transform: translateY(-100%); // Desliza el contenido para que sea visible
			margin-bottom: 100px;

			transform: perspective(900px);
			transform-style: preserve-3d;

			transform: rotatex(60deg) translatey(-300px) translatez(-100px);
			color: #1d1d1d;
		`}
`;

export const ProyectFrontDesktopApp = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding: 2rem;
	/* position: absolute; */
	width: 95%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	position: relative;

	h2 {
		font-size: 40px;
		margin-bottom: 70px;
		color: white;
	}

	/* img {
		height: 190px;
		width: 180px;
		margin-bottom: 50px;
	} */

	h3 {
		font-size: 30px !important;
		margin: 0;
		position: absolute;
		left: 40px;
		top: 60px;
	}

	p {
		color: #4c86a8;
	}

	@media (min-width: 1430px) {
		h2 {
			font-size: 35px;
		}
	}
`;

const ToggleCard = () => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<CardWrapper>
			<Card onClick={toggleOpen}>
				<p>Clic para deslizar</p>
			</Card>
			<SlidingContent isOpen={isOpen}>
				<ProyectFrontDesktopApp></ProyectFrontDesktopApp>
			</SlidingContent>
		</CardWrapper>
	);
};

export default ToggleCard;

// 	<p>https://freefrontend.com/css-card-hover-effects/</p> <p>https://codepen.io/codev_land/pen/yLXeyWX</p>
