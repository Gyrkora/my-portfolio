import styled from 'styled-components'
import Container from '../../components/UI/Container'

export const CardGeneral = styled(Container)`
	box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	-moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.73);
	width: ${(props) => props.rWidth};
	height: ${(props) => props.height};

	/* max-height: 95%; */
	margin: 0 1.5rem;
	border-radius: 1rem;
	border-top: ${(props) => props.borderTop};
	background-color: ${(props) => props.bColor};
	/* transition: all 0.5s ease-in-out; */

	p {
		color: white;
	}

	@media (min-width: 768px) {
		width: ${(props) => props.width};
		/* max-width: 95%; */
		height: ${(props) => props.height};
	}
`
