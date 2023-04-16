import { RowContainer } from '../styles/UI/Containers.styles';
import { SkillSectionContainer } from '../styles/UI/SectionContainer.styles';
import SkillItem from './SkillItem';
// Import Swiper React components

const Skills = () => {
	return (
		<SkillSectionContainer id="skills">
			<h3>Skills</h3>

			<RowContainer>
				<SkillItem />
			</RowContainer>
		</SkillSectionContainer>
	);
};

export default Skills;
