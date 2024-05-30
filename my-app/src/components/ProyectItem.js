// import React, { useEffect, useState } from 'react';
import { proyectList } from '../data';
import {
	ProyectBack,
	ProyectContainer,
	ProyectFront,
	ParentContainerProyects,
	ProyectBackDescription,
	ProyectDescriptionText,
	ProyectDescriptionTitle,
} from '../styles/ProyectItem.styles';
import {
	ButtonBackCards,
	ButtonCardsContainer,
	ButtonFrontCards,
	ButtonFrontMoreInfo,
} from '../styles/UI/ButtonGeneral';
import { redirectToExternalWebsite } from '../helpers/functions';
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';

const ProyectItem = ({ type }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

	const handleResize = () => {
		setIsMobile(window.innerWidth < 1024);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleFlip = () => {
		if (isMobile) {
			setIsFlipped(!isFlipped);
		}
	};

	return (
		<div>
			<ParentContainerProyects>
				{proyectList.map((proj, index) => (
					<ProyectContainer key={index} isFlipped={isFlipped}>
						<ProyectFront>
							<h3>{proj.language}</h3>
							<h2>{proj.name}</h2>
							<img src={proj.photo} alt="Logo"></img>

							<ButtonCardsContainer>
								<ButtonFrontCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'Website'}
									onClick={() => redirectToExternalWebsite(proj.demo)}
								></ButtonFrontCards>
								<ButtonFrontCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'CODE'}
									onClick={() => redirectToExternalWebsite(proj.code)}
								></ButtonFrontCards>
								{isMobile && (
									<ButtonFrontMoreInfo
										bColor={'transparent'}
										pX={'20rem'}
										label={'More info'}
										onClick={handleFlip}
									></ButtonFrontMoreInfo>
								)}
							</ButtonCardsContainer>
						</ProyectFront>

						<ProyectBack>
							<h3>{proj.language}</h3>
							<h2>{proj.name}</h2>
							<ProyectBackDescription>
								<ProyectDescriptionTitle>
									<h4>Website</h4>
								</ProyectDescriptionTitle>

								<ProyectDescriptionText>
									<p>{proj.descripton}</p>
								</ProyectDescriptionText>
							</ProyectBackDescription>
							<ProyectBackDescription>
								<ProyectDescriptionTitle>
									<h4>Tools</h4>
								</ProyectDescriptionTitle>

								<ProyectDescriptionText>
									<p>{proj.tools}</p>
								</ProyectDescriptionText>
							</ProyectBackDescription>
							<ButtonCardsContainer>
								<ButtonBackCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'Website'}
									onClick={() => redirectToExternalWebsite(proj.demo)}
								></ButtonBackCards>
								<ButtonBackCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'CODE'}
									onClick={() => redirectToExternalWebsite(proj.code)}
								></ButtonBackCards>
								{isMobile && (
									<ButtonFrontMoreInfo
										bColor={'transparent'}
										pX={'20rem'}
										label={'More info'}
										onClick={handleFlip}
									></ButtonFrontMoreInfo>
								)}
							</ButtonCardsContainer>
						</ProyectBack>
					</ProyectContainer>
				))}
			</ParentContainerProyects>
		</div>
	);
};

export default ProyectItem;
