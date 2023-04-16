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
						simply dummy text of the printing and typesetting industry. Lorem
						Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley
					</p>
				</AboutText>
			</AboutTextContainer>
		</SectionContainer>
	);
};

export default About;
