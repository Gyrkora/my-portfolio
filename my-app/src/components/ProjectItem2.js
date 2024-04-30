import { proyectList2 } from '../data';
import {
	ProyectBack,
	ProyectContainer,
	ProyectFront,
	ParentContainerProyects,
	ProyectBackDescription,
	ProyectDescriptionText,
	ProyectDescriptionTitle,
	ProyectContainerDesktopApp,
	SlidingContent,
	ProjectFrontDesktopApps,
} from '../styles/ProyectItem.styles';
import {
	ButtonBackCards,
	ButtonCardsContainer,
	ButtonFrontCards,
} from '../styles/UI/ButtonGeneral';
import { redirectToExternalWebsite } from '../helpers/functions';
import { useState } from 'react';
import SlicingCard, {
	ProyectContainerDesktopAppIndividual,
} from '../components/UI/SlicingCard';
// import axios from 'axios';

function ProjectItem2() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<ParentContainerProyects>
				{proyectList2.map((proj, index) => (
					<ProyectContainerDesktopAppIndividual
						key={index}
						onClick={toggleOpen}
					>
						<SlicingCard />
					</ProyectContainerDesktopAppIndividual>
				))}
			</ParentContainerProyects>
		</div>
	);
}

export default ProjectItem2;

/* {proyectList2.map((proj, index) => (
					<ProyectContainerDesktopApp key={index} onClick={toggleOpen}>
						<ProjectFrontDesktopApps>
							<h3>{proj.language}</h3>
							<h2>{proj.name}</h2>
							<ButtonCardsContainer>
								<ButtonFrontCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'DEMO'}
									onClick={() => redirectToExternalWebsite(proj.demo)}
								></ButtonFrontCards>
								<ButtonFrontCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'CODE'}
									onClick={() => redirectToExternalWebsite(proj.code)}
								></ButtonFrontCards>
							</ButtonCardsContainer>
						</ProjectFrontDesktopApps>

						<SlidingContent isOpen={isOpen}>
							<p>loremjksajdksakjdsakdjas kasdjaksdjaskd jaskdj asjdasd</p>
							<p>loremjksajdksakjdsakdjas kasdjaksdjaskd jaskdj asjdasd</p>
						</SlidingContent>
					</ProyectContainerDesktopApp>
				))} */
