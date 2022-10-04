import React from 'react'
import { CardGeneral } from '../styles/UI/Card'
import { CenteredContainer, RowContainer } from '../styles/UI/Containers.styles'

const SkillItem = () => {
	return (
		<CardGeneral
			bColor={'black'}
			borderTop={'none'}
			width={'10rem'}
			height={'10rem'}
		>
			<CenteredContainer></CenteredContainer>

			<RowContainer>
				<p>hola1</p>
				<p>hola2</p>
			</RowContainer>
		</CardGeneral>
	)
}

export default SkillItem
