import React from 'react'
import {
	ProyectBack,
	ProyectCard,
	ProyectContainer,
	ProyectFront,
	ProyectTexts,
} from '../styles/ProyectItem.styles'
import { CardGeneral } from '../styles/UI/Card'
import { RowContainer } from '../styles/UI/Containers.styles'

const ProyectItem = ({ type }) => {
	return (
		<ProyectCard rotateY={'180deg'}>
			<ProyectContainer>
				<ProyectFront>
					<h3>Javascript</h3>
					<h2>Desafíos TOW</h2>
					<p>
						Sint dolore consequat dolor esse laborum dolor. Irure exercitation
						cillum eiusmod duis cupidatat excepteur commodo ad voluptate do.
						Nisi
					</p>
				</ProyectFront>

				<ProyectBack>
					{/* <ProyectCard> */}
					<h2>hola</h2>
					{/* </ProyectCard> */}
				</ProyectBack>

				{/* <RowContainer>
					<p>hola1</p>
					<p>hola2</p>
				</RowContainer> */}
			</ProyectContainer>
		</ProyectCard>
	)
}

export default ProyectItem
