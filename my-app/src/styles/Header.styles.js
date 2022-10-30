import styled from 'styled-components'

export const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 100px;
	margin-bottom: 200px;

	h2 {
		font-size: 70px;
		color: #4c86a8;
		/* color: white; */
		margin: 0;
	}

	@media (min-width: 992px) {
		align-items: flex-start;
		justify-content: flex-start;
	}
`
