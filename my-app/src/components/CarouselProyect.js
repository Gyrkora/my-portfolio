import React from 'react';
import { CarouselSkillContainer } from '../styles/Carousel.styles';
import { Autoplay, Grid, Pagination } from 'swiper';
import { proyectList } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { TotalCenteredContainer } from '../styles/UI/Containers.styles';
import {
	ProyectBack,
	ProyectContainer,
	ProyectFront,
} from '../styles/ProyectItem.styles';

function CarouselProyect() {
	return (
		<div>
			<h1 style={{ color: 'white' }}>CarouselProyect</h1>

			<div style={{ marginBottom: '4rem' }}>
				<Swiper
					slidesPerView={1}
					spaceBetween={1}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						'@0.00': {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						'@0.75': {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						'@1.00': {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						'@1.50': {
							slidesPerView: 4,
							spaceBetween: 50,
						},
					}}
					modules={[Autoplay, Grid, Pagination]}
					className="mySwiper"
				>
					{proyectList.map((proj, index) => (
						<SwiperSlide key={index}>
							<div>
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
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default CarouselProyect;
