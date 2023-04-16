import React from 'react'
import { proyectList } from '../data'
import { CarouselProyectContainer } from '../styles/Carousel.styles'
import {
	ProyectBack,
	ProyectCard,
	ProyectContainer,
	ProyectFront,
	ProyectTexts,
} from '../styles/ProyectItem.styles'
import { CardGeneral } from '../styles/UI/Card'
import {
	RowContainer,
	TotalCenteredContainer,
} from '../styles/UI/Containers.styles'

//swiper
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

const ProyectItem = ({ type }) => {
	return (
		<CarouselProyectContainer>
			<Swiper
				slidesPerView={1}
				spaceBetween={1}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{proyectList.map((proj, index) => (
					<SwiperSlide key={index}>
						<ProyectCard rotateY={'180deg'}>
							<ProyectContainer>
								<ProyectFront>
									<h3>{proj.language}</h3>
									<h2>{proj.name}</h2>
									<p>{proj.description}</p>
								</ProyectFront>

								<ProyectBack>
									<h2>hola</h2>
								</ProyectBack>
							</ProyectContainer>
						</ProyectCard>
					</SwiperSlide>
				))}
			</Swiper>
		</CarouselProyectContainer>
	)
}

export default ProyectItem

/* 
<RowContainer>
<p>hola1</p>
<p>hola2</p>
</RowContainer> 	

*/

/* 

<ProyectCard rotateY={'180deg'}>
							<ProyectContainer>
								<ProyectFront>
									<h3>{proj.language}</h3>
									<h2>{proj.name}</h2>
									<p>{proj.description}</p>
								</ProyectFront>

								<ProyectBack>
								
									<h2>hola</h2>
									
								</ProyectBack>
							</ProyectContainer>
						</ProyectCard>


*/
