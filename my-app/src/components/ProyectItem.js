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
} from '../styles/UI/ButtonGeneral';
import { redirectToExternalWebsite } from '../helpers/functions';
// import axios from 'axios';

const ProyectItem = ({ type }) => {
	return (
		<div>
			<ParentContainerProyects>
				{proyectList.map((proj, index) => (
					<ProyectContainer key={index}>
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
									<p>Quiz platform to evaluate your Spanish</p>
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
							</ButtonCardsContainer>
						</ProyectBack>
					</ProyectContainer>
				))}
			</ParentContainerProyects>
		</div>
	);
};

export default ProyectItem;
