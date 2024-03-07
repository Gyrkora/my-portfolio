import React from 'react';
import { AboutText, AboutTextContainer } from '../styles/About.styles';
import { SectionContainer } from '../styles/UI/SectionContainer.styles';

const About = () => {
	return (
		<SectionContainer id="about">
			<h3>Who am I?</h3>

			<AboutTextContainer>
				<AboutText>
					<p>
						I'm a Frontend developer studying to become a Full Stack Developer.
						My long-term goal is to create new tools for education, with hopes
						to transform our society into one that cares about others'
						education. My short-term goal is to work with a group of people
						collaboratively to create efficent and effective technological
						tools. I love the idea of learning with and from people who have
						more work experience than me.
					</p>
				</AboutText>
			</AboutTextContainer>
		</SectionContainer>
	);
};

export default About;
