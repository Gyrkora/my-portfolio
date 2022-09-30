import { ProyectContainer, ProyectsContainer } from '../styles/Proyects.styles'
import { SectionContainer } from '../styles/UI/SectionContainer.styles'

const Proyects = () => {
	return (
		<SectionContainer>
			<h3>My Proyects </h3>
			<ProyectsContainer>
				<ProyectContainer>
					<p>proyect</p>
				</ProyectContainer>
				<ProyectContainer>
					<p>proyect</p>
				</ProyectContainer>
				<ProyectContainer>
					<p>proyect</p>
				</ProyectContainer>
			</ProyectsContainer>
			<ProyectsContainer>
				<ProyectContainer>
					<p>proyect</p>
				</ProyectContainer>
				<ProyectContainer>
					<p>proyect</p>
				</ProyectContainer>
				<ProyectContainer>
					<p>proyect</p>
				</ProyectContainer>
			</ProyectsContainer>
		</SectionContainer>
	)
}

export default Proyects
