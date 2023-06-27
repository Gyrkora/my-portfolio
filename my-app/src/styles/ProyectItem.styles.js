import styled from 'styled-components';

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
	position: absolute;
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
		font-size: 30px;
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
			font-size: 45px;
		}
	}
`;

export const ProyectBack = styled(ProyectFront)`
	position: absolute;
	h4 {
		font-size: 30px;
		color: #4c86a8;
		margin: 0;
	}

	transform: rotateY(180deg);
`;

export const ProyectBackDescription = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	text-align: left;

	margin: 0 50px;
`;

export const ProyectDescriptionTitle = styled.div`
	width: 85%;
`;

export const ProyectDescriptionText = styled.div`
	width: 90%;
`;
