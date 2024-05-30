import styled, { css, keyframes } from 'styled-components';

export const ProyectContainerDesktopAppIndividual = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 90%;
	width: 700px;
	max-height: 95%;
	height: 350px;
	border-top: 2px solid #4c86a8;
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	margin: 0 1.5rem 70px 1.5rem;
	border-radius: 1rem;
	background-color: #1d1d1d;
	transition: transform 0.5s;
	transform-style: preserve-3d;
	/* cursor: default; */

	/* @media (min-width: 1400px) {
		max-width: 90%;
		width: 1000px;
	} */

	@media (min-width: 1399px) {
		margin: 0.5rem 1.5rem;
	}
`;

//contender verde
export const CardWrapper = styled.div`
	position: relative;
	/* width: 375px; // Puedes ajustar el ancho según necesites */

	max-width: 96%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid green;
`;

//pantalla blanca
export const CardDesktopApp = styled.div`
	background: #1d1d1d;
	color: white;
	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 20px;
	cursor: pointer;
	z-index: 10;
	position: relative;
	height: 300px;
	width: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 700px;

	@media (min-width: 1399px) {
		width: 350px;
	}
`;

// Componente del contenido deslizante
export const SlidingContent = styled.div`
	background-color: #1d1d1d;

	color: white;
	position: absolute;
	/* top: 100%; */
	/* top: -300px; */
	bottom: -292px;

	left: 0;
	width: 25%;
	left: 215px;
	height: 150px;
	color: white;
	transition: all 0.5s ease-in-out;
	transform: translateY(0);

	border-bottom: 10px solid grey;
	border-right: 1px solid black;
	border-left: 1px solid black;

	border-radius: 0 0 8px 8px;
	text-align: center;

	@media (min-width: 1024px) {
		bottom: -292px;

		left: 0;
		width: 25%;
		left: 140px;
	}

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

		@media (max-width: 768px) {
			margin-bottom: 20px;
		}
	}

	h3 {
		font-size: 27px !important;
		margin: 0;
		/* text-align: center; */
		position: absolute;
		left: -50;

		top: 50px;

		@media (max-width: 768px) {
			top: 30px;
		}
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
