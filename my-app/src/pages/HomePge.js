import React from 'react';
import About from '../components/About';
import CarouselSkill from '../components/CarouselSkill';
import Header from '../components/Header';
import Proyects from '../components/Proyects';
import Skills from '../components/Skills';
import { HomePageContainer } from '../styles/HomePage.styles';
import CarouselProyect from '../components/CarouselProyect';
import Contact from '../components/Contact';

const HomePge = () => {
	return (
		<HomePageContainer>
			<Header />

			<About />
			<Proyects />
			<Skills />

			<CarouselSkill />
			<Contact />
		</HomePageContainer>
	);
};

export default HomePge;
