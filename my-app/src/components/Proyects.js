import { CenteredContainer } from '../styles/UI/Containers.styles'
import { SectionContainer } from '../styles/UI/SectionContainer.styles'
import ProyectItem from './ProyectItem'

const Proyects = () => {
	return (
		<SectionContainer>
			<h3>My Proyects </h3>
			<CenteredContainer>
				<ProyectItem />
			</CenteredContainer>
		</SectionContainer>
	)
}

export default Proyects
