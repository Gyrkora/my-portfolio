import React, { useEffect, useState } from 'react';
// import { proyectList } from '../data';
import {
	ProyectBack,
	ProyectContainer,
	ProyectFront,
	ParentContainerProyects,
	ProyectBackDescription,
	ProyectDescriptionText,
	ProyectDescriptionTitle,
} from '../styles/ProyectItem.styles';
import {
	ButtonBackCards,
	ButtonCardsContainer,
	ButtonFrontCards,
} from '../styles/UI/ButtonGeneral';
import { redirectToExternalWebsite } from '../helpers/functions';
import axios from 'axios';

const ProyectItem = ({ type }) => {
	const [proyectList, setProjects] = useState([]);

	// useEffect(() => {
	// 	fetch('http://localhost:3001/api')
	// 		.then((res) => res.json())
	// 		.then((data) => setProjects(data.projects));
	// }, []);

	useEffect(() => {
		getQuote();
	}, []);
	function getQuote() {
		axios
			.get('https://back-portfolio-4nf8.onrender.com/api', {
				crossdomain: true,
			})
			.then((response) => {
				setProjects(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}

	return (
		<div>
			<ParentContainerProyects>
				{/* {console.log(proyectListData)} */}
				{proyectList.map((proj, index) => (
					<ProyectContainer key={index}>
						<ProyectFront>
							<h3>{proj.language}</h3>
							<h2>{proj.name}</h2>
							<img src={proj.photo} alt="Logo"></img>
							<ButtonCardsContainer>
								<ButtonFrontCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'DEMO'}
									onClick={() => redirectToExternalWebsite(proj.demo)}
								></ButtonFrontCards>
								<ButtonFrontCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'CODE'}
									onClick={() => redirectToExternalWebsite(proj.code)}
								></ButtonFrontCards>
							</ButtonCardsContainer>
						</ProyectFront>

						<ProyectBack>
							<h3>{proj.language}</h3>
							<h2>{proj.name}</h2>
							<ProyectBackDescription>
								<ProyectDescriptionTitle>
									<h4>Website</h4>
								</ProyectDescriptionTitle>

								<ProyectDescriptionText>
									<p>Quiz platform to evaluate your Spanish</p>
								</ProyectDescriptionText>
							</ProyectBackDescription>
							<ProyectBackDescription>
								<ProyectDescriptionTitle>
									<h4>Tools</h4>
								</ProyectDescriptionTitle>

								<ProyectDescriptionText>
									<p>{proj.tools}</p>
								</ProyectDescriptionText>
							</ProyectBackDescription>
							<ButtonCardsContainer>
								<ButtonBackCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'DEMO'}
									onClick={() => redirectToExternalWebsite(proj.code)}
								></ButtonBackCards>
								<ButtonBackCards
									bColor={'#A93F55'}
									pX={'20rem'}
									label={'CODE'}
									onClick={() => redirectToExternalWebsite(proj.code)}
								></ButtonBackCards>
							</ButtonCardsContainer>
						</ProyectBack>
					</ProyectContainer>
				))}
			</ParentContainerProyects>
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

/* //swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper'; */

// slidesPerView={2}
// spaceBetween={30}
// pagination={{
// 	clickable: true,
// }}
// modules={[Pagination]}
// className="mySwiper"
// breakpoints={{
// 	// when window width is >= 200px
// 	200: {
// 		width: 230,
// 		slidesPerView: 1,
// 	},
// 	396: {
// 		width: 400,
// 		slidesPerView: 1,
// 	},
// 	690: {
// 		width: 400,
// 		slidesPerView: 1,
// 	},
// 	864: {
// 		width: 850,
// 		slidesPerView: 2,
// 	},
// }}
// <SwiperSlide key={index}>

// </SwiperSlide>
