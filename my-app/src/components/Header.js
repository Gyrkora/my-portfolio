import React from 'react';
import { HeaderContainer } from '../styles/Header.styles';
import { ButtonLinkHeader, ButtonOriginal } from '../styles/UI/ButtonGeneral';

const Header = () => {
	return (
		<HeaderContainer>
			<h2>Hello!</h2>
			<h2>I'm Gyr,</h2>
			<h2>A Web Developer</h2>

			<ButtonLinkHeader
				to="contact"
				spy={true}
				smooth={true}
				offset={-100}
				duration={500}
			>
				<ButtonOriginal
					bColor={'#A93F55'}
					pX={'20rem'}
					label={'Contact me'}
				></ButtonOriginal>
			</ButtonLinkHeader>
		</HeaderContainer>
	);
};

export default Header;
