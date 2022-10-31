import styled from 'styled-components'
import Container from '../components/UI/Container'

export const ProyectCard = styled(Container)`
	display: flex;
	justify-content: center;

	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	width: 15rem;
	height: 25rem;

	max-width: 99%;
	margin: 0 1.5rem;
	border-radius: 1rem;
	border-top: 2px solid #ebc331;
	background-color: #1d1d1d;
	transition: 0.5s;

	p {
		color: white;
	}

	&:hover {
		transform: rotateY(${(props) => props.rotateY});
	}

	@media (min-width: 768px) {
		width: 20rem;
		height: 25rem;
	}
`

export const ProyectContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 95%;
	width: 20rem;
	max-height: 95%;
	height: 25rem;
	/* flex-direction: column; */

	transition: transform 0.5s;
	transform-style: preserve-3d;

	&:hover {
		transform: rotateY(180deg);
	}
`

export const ProyectFront = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	padding: 2rem;
	/* max-width: 95%; */

	position: absolute;
	width: 95%;
	height: 100%;

	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;

	h2 {
		font-size: 45px;
		margin: 1rem 0;
	}

	h3 {
		font-size: 30px;
		margin: 0;
	}
`
export const ProyectBack = styled.div`
	position: absolute;
	width: 95%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;

	background-color: #2980b9;
	color: white;
	transform: rotateY(180deg);
`
