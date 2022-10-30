import React from 'react'
import About from '../components/About'
import Carousel from '../components/Carousel'
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
			<Carousel />
		</HomePageContainer>
	)
}

export default HomePge
