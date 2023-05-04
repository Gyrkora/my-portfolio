import styled from 'styled-components';

export const CenteredContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 4rem 0;

	@media (min-width: 902px) {
		justify-content: space-between;
	}
`;

export const TotalCenteredContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2.5rem 0;
`;

export const RowContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	flex-direction: row;
	/* justify-content: flex-start; */
	justify-content: center;
	align-content: flex-start;

	margin: 0 auto;
`;

export const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
