import { SectionContainer } from '../styles/UI/SectionContainer.styles';
import ProjectItem2 from './ProjectItem2';
import ProyectItem from './ProyectItem';

const Proyects = () => {
	return (
		<SectionContainer>
			<h3 id="proyects">My Projects</h3>
			<h4 id="web-apps">Web Apps</h4>
			<ProyectItem />

			<h4 id="desktop-apps">Desktop Apps</h4>
			<ProjectItem2 />
		</SectionContainer>
	);
};

export default Proyects;
