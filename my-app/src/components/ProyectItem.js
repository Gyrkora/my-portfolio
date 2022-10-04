import React from 'react'
import { ProyectContainer, ProyectTexts } from '../styles/ProyectItem.styles'
import { CardGeneral } from '../styles/UI/Card'
import { RowContainer } from '../styles/UI/Containers.styles'

const ProyectItem = ({ type }) => {
	return (
		<CardGeneral
			bColor={'#1d1d1d'}
			borderTop={'2px solid #ebc331'}
			width={'20rem'}
			height={'25rem'}
			rWidth={'15rem'}
		>
			<ProyectContainer>
				<ProyectTexts>
					<h3>Javascript</h3>
					<h2>Desafíos TOW</h2>
					<p>
						Sint dolore consequat dolor esse laborum dolor. Irure exercitation
						cillum eiusmod duis cupidatat excepteur commodo ad voluptate do.
						Nisi
					</p>
				</ProyectTexts>

				<RowContainer>
					<p>hola1</p>
					<p>hola2</p>
				</RowContainer>
			</ProyectContainer>
		</CardGeneral>
	)
}

export default ProyectItem
