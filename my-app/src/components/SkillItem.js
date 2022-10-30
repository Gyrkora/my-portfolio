import React from 'react'
import { imageList } from '../data'
import { SkillCard } from '../styles/Skills.styles'
import { TotalCenteredContainer } from '../styles/UI/Containers.styles'

const SkillItem = () => {
	return (
		<>
			{imageList.map((img) => (
				<SkillCard key={img.id}>
					<TotalCenteredContainer>
						<img src={img.image} alt={img.alt} />
					</TotalCenteredContainer>
				</SkillCard>
			))}
		</>
	)
}

export default SkillItem
