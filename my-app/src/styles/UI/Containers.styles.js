import styled from 'styled-components'

export const CenteredContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 4rem 0;

	@media (min-width: 902px) {
		justify-content: space-between;
	}
`

export const RowContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`
