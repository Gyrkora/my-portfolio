import styled from 'styled-components'
import { Button } from '../../components/UI/Button'

export const ButtonOriginal = styled(Button)`
	margin: 3rem 0 1rem 0;
	padding: 0.5rem 5rem;
	color: #a93f55;
	border-color: ${(props) => props.bColor};
	cursor: pointer;
	/* border-radius: 1rem; */
	border-width: 4px;
	border-style: solid;
	font-size: 1.5rem;
	transition: all 0.5s ease-in-out;
	background-color: #1d1d1d;

	&:hover {
		padding: 0.5rem ${(props) => props.pX};
	}
`

// export const ButtonSwitchedContain = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	column-gap: 3rem;
// 	margin-top: 2rem;
// `
