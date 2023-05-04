import styled from 'styled-components';

export const ProyectContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 95%;
	/* max-width: 40rem; */
	max-height: 95%;
	height: 33rem;

	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	margin: 0.5rem 1.5rem;
	border-radius: 1rem;
	border-top: 2px solid #ebc331;
	background-color: #1d1d1d;

	/* flex-direction: column; */

	transition: transform 0.5s;
	transform-style: preserve-3d;

	&:hover {
		transform: rotateY(180deg);
	}
`;

export const ProyectFront = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding: 2rem;
	position: absolute;
	width: 95%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	position: relative;

	h2 {
		font-size: 45px;
		margin-bottom: 70px;
		color: white;
	}

	img {
		height: 190px;
		width: 180px;
	}

	h3 {
		font-size: 30px;
		margin: 0;
		position: absolute;
		left: 40px;
		top: 60px;
	}

	p {
		color: #4c86a8;
	}
`;

/* proyect front inside */

export const ProyectBack = styled.div`
	position: absolute;
	width: 95%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;

	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;

	color: white;
	transform: rotateY(180deg);

	h2 {
		font-size: 45px;
		margin: 1rem 0;
		color: white;
	}

	h3 {
		font-size: 30px;
		margin: 0;
	}

	p {
		color: #4c86a8;
	}
`;
