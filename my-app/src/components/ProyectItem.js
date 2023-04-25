import React from 'react';
import { proyectList } from '../data';
import {
	ProyectBack,
	ProyectContainer,
	ProyectFront,
} from '../styles/ProyectItem.styles';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const ProyectItem = ({ type }) => {
	return (
		<div>
			<Swiper
				slidesPerView={2}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
				breakpoints={{
					// when window width is >= 200px
					200: {
						width: 230,
						slidesPerView: 1,
					},
					396: {
						width: 400,
						slidesPerView: 1,
					},
					690: {
						width: 400,
						slidesPerView: 1,
					},
					864: {
						width: 850,
						slidesPerView: 2,
					},
				}}
			>
				{proyectList.map((proj, index) => (
					<SwiperSlide key={index}>
						<ProyectContainer>
							<ProyectFront>
								<h3>{proj.language}</h3>
								<h2>{proj.name}</h2>
								<img src={proj.photo} alt="Logo"></img>
							</ProyectFront>

							<ProyectBack>
								<h2>hola</h2>
							</ProyectBack>
						</ProyectContainer>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default ProyectItem;

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
