import styled, { css } from 'styled-components';

const headingStyles_sections = css`
	text-align: center;
	font-weight: bold;
	font-size: 55px;
	color: #a93f55;

	@media (min-width: 768px) {
		text-align: left;
	}
`;

export const SectionContainer = styled.div`
	margin-bottom: 200px;

	h3 {
		${headingStyles_sections}
	}

	h4 {
		text-align: center;
		font-weight: bold;
		font-size: 40px;
		color: #a93f55;
	}

	h5 {
		color: white;
		font-size: 40px;
	}
`;

export const SkillSectionContainer = styled.div`
	margin-bottom: 200px;
	h3 {
		${headingStyles_sections}
	}

	@media (max-width: 488px) {
		margin-bottom: 0;
	}
`;
