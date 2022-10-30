import styled from 'styled-components'

export const SectionContainer = styled.div`
	margin-bottom: 200px;
	h3 {
		text-align: center;
		font-size: 55px;
		color: #a93f55;
		font-weight: bold;

		@media (min-width: 768px) {
			text-align: left;
		}
	}
`

export const SkillSectionContainer = styled.div`
	margin-bottom: 200px;
	h3 {
		text-align: center;
		font-size: 55px;
		color: #a93f55;
		font-weight: bold;

		@media (min-width: 768px) {
			text-align: left;
		}
	}

	@media (max-width: 488px) {
		margin-bottom: 0;
	}
`
