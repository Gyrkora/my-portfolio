import styled, { css } from 'styled-components';

export const ParentContainerProyects = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	flex-direction: column;

	@media (min-width: 1400px) {
		flex-direction: row;
	}
`;

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

export const ProyectFront = styled.div`
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

	img {
		height: 190px;
		width: 180px;
		margin-bottom: 50px;
	}

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

export const ProyectBack = styled(ProyectFront)`
	position: absolute;
	h4 {
		font-size: 30px !important;
		color: #4c86a8;
		margin: 0;
	}

	transform: rotateY(180deg);
`;

export const ProyectBackDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	margin: 0 50px;
	/* 
	@media (min-width: 1024px) {
		flex-direction: row;
		text-align: left;
	} */
`;

export const ProyectDescriptionTitle = styled.div`
	width: 85%;
`;

export const ProyectDescriptionText = styled.div`
	width: 90%;
`;

// ## Desktop Apps

export const ProyectContainerDesktopApp = styled(ProyectContainer)`
	border-top: 2px solid #4c86a8;
	height: 350px;
	position: relative !important;

	@media (min-width: 1024px) {
		&:hover {
			transform: none;
		}
	}
`;

export const ProjectFrontDesktopApps = styled(ProyectFront)`
	z-index: 10;
	position: relative !important;
	/* height: 400px; */
`;

export const SlidingContent = styled.div`
	background-color: #1d1d1d;
	color: #1d1d1d;
	position: absolute;
	top: 100%; // Empieza justo debajo de la tarjeta
	left: 0;
	width: 100%;
	transition: transform 0.5s ease-in-out;
	transform: translateY(100%); // Estado inicial
	background-color: grey;
	border-radius: 0 0 8px 8px;
	background-color: #1d1d1d;

	${({ isOpen }) =>
		isOpen &&
		css`
			transition: all 0.5s ease-in-out;
			transform: translateY(100%);
			color: white;
			border-bottom: 1px solid #ccc;
		`};
`;

/*

background-color: #1d1d1d;
	color: white;
	position: absolute;
	top: 100%; // Empieza justo debajo de la tarjeta
	left: 0;
	width: 100%;
	transition: transform 0.5s ease-in-out;
	transform: translateY(0); // Estado inicial
	border-bottom: 1px solid #ccc;
	border-radius: 0 0 8px 8px;
	display: ${({ isOpen }) =>
		isOpen ? 'block' : 'none'}; // Controla la visibilidad basada en isOpen

	${({ isOpen }) =>
		isOpen &&
		css`
			transform: translateY(
				-100%
			); // Mueve el contenido hacia arriba para que sea visible
		`}


*/
