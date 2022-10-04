import React from 'react'
import About from '../components/About'
import Header from '../components/Header'
import Proyects from '../components/Proyects'
import Skills from '../components/Skills'
import { HomePageContainer } from '../styles/HomePage.styles'

const HomePge = () => {
	return (
		<HomePageContainer>
			<Header />
			<About />
			<Proyects />
			<Skills />
		</HomePageContainer>
	)
}

export default HomePge
