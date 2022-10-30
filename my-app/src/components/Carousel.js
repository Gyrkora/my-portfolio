import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import { Pagination, Grid, Autoplay } from 'swiper'
import { imageList } from '../data'
import { CardGeneral } from '../styles/UI/Card'
import { TotalCenteredContainer } from '../styles/UI/Containers.styles'
import { CarouselContainer } from '../styles/Carousel.styles'

const Carousel = () => {
	return (
		<CarouselContainer style={{ marginBottom: '4rem' }}>
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
				{imageList.map((img, index) => (
					<SwiperSlide key={index}>
						<div>
							<TotalCenteredContainer>
								<img src={img.image} alt={img.alt} />
							</TotalCenteredContainer>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</CarouselContainer>
	)
}

export default Carousel
