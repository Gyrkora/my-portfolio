import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Proyects from '../components/Proyects'
import { HomePageContainer } from '../styles/HomePage.styles'

const HomePge = () => {
	return (
		<HomePageContainer>
			<Header />
			<About />
			<Proyects />
		</HomePageContainer>
	)
}

export default HomePge
