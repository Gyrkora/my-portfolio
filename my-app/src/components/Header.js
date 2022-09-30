import React from 'react'
import { HeaderContainer } from '../styles/Header.styles'
import { ButtonOriginal } from '../styles/UI/ButtonGeneral'

const Header = () => {
	return (
		<HeaderContainer>
			<h2>Hello!</h2>
			<h2>I'm Gy,</h2>
			<h2>A Web Developer</h2>

			<ButtonOriginal
				bColor={'#A93F55'}
				pX={'20rem'}
				label={'Contact me'}
				onClick={() => console.log('ir a cart')}
			></ButtonOriginal>
		</HeaderContainer>
	)
}

export default Header
