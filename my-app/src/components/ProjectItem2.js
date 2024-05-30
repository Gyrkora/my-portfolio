import { proyectList2 } from '../data';
import { ParentContainerProyects } from '../styles/ProyectItem.styles';
import { useState } from 'react';
import {
	ProyectFrontDesktopApp,
	ProyectContainerDesktopAppIndividual,
	CardWrapper,
	SlidingContent,
	CardDesktopApp,
} from '../styles/ProyectItemDesktopApp.styles';
import {
	ButtonCardsContainer,
	ButtonFrontCards,
	ButtonFrontCardsDesktopApps,
} from '../styles/UI/ButtonGeneral';
import { redirectToExternalWebsite } from '../helpers/functions';

function ProjectItem2() {
	const [isOpen, setIsOpen] = useState(true);

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
						<CardWrapper>
							<CardDesktopApp onClick={toggleOpen}>
								<ProyectFrontDesktopApp>
									<h3>{proj.language}</h3>
									<h2>{proj.name}</h2>
									<ButtonCardsContainer>
										<ButtonFrontCardsDesktopApps
											bColor={'#A93F55'}
											pX={'20rem'}
											label={'IMAGE'}
											onClick={() => redirectToExternalWebsite(proj.demo)}
										></ButtonFrontCardsDesktopApps>
										<ButtonFrontCardsDesktopApps
											bColor={'#A93F55'}
											pX={'20rem'}
											label={'CODE'}
											onClick={() => redirectToExternalWebsite(proj.code)}
										></ButtonFrontCardsDesktopApps>
									</ButtonCardsContainer>
								</ProyectFrontDesktopApp>
							</CardDesktopApp>
							<SlidingContent isOpen={isOpen}></SlidingContent>
						</CardWrapper>
					</ProyectContainerDesktopAppIndividual>
				))}
			</ParentContainerProyects>
		</div>
	);
}

export default ProjectItem2;
