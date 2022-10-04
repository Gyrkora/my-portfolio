import styled from 'styled-components'

export const ProyectContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: 95%;
	width: 20rem;
	max-height: 95%;
	height: 25rem;
	flex-direction: column;
`

export const ProyectTexts = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	text-align: left;
	padding: 2rem;
	max-width: 95%;

	h2 {
		font-size: 45px;
		margin: 1rem 0;
	}

	h3 {
		font-size: 30px;
		margin: 0;
	}
`
