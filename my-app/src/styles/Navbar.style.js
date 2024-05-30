// import styled from 'styled-components';
// import { Link as LinkScroll } from 'react-scroll';

// export const NavbarContainer = styled.nav`
// 	width: 100%;
// 	height: ${(props) => (props.showNavbar ? '23rem' : '80px')};
// 	background-color: #1d1d1d;
// 	display: flex;
// 	flex-direction: column;
// 	transition: all 0.7s ease-in-out;

// 	@media (min-width: 700px) {
// 		height: 80px;
// 	}
// `;

// export const LeftContainer = styled.div`
// 	flex: 40%;
// 	display: flex;
// 	align-items: center;
// 	padding-left: 5%;
// `;
// export const RightContainer = styled.div`
// 	flex: 60%;
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// 	padding-right: 50px;

// 	a {
// 		color: #4a4f47;
// 	}

// 	@media (min-width: 1024px) {
// 		justify-content: space-evenly;
// 	}
// `;

// export const NavbarInnerContainer = styled.div`
// 	width: 100%;
// 	height: 80px;
// 	display: flex;
// `;

// export const NavbarLinkContainer = styled.div`
// 	display: flex;
// `;

// export const NavbarLink = styled(LinkScroll)`
// 	color: white;
// 	font-size: x-large;
// 	font-family: Arial, Helvetica, sans-serif;
// 	text-decoration: none;
// 	margin: 10px;
// 	cursor: pointer;

// 	transition: all 0.3s ease-in-out;

// 	&:hover {
// 		color: #4c86a8;
// 	}

// 	@media (max-width: 700px) {
// 		display: none;
// 	}
// `;

// export const NavbarRLink = styled(LinkScroll)`
// 	color: white;
// 	font-size: x-large;
// 	font-family: Arial, Helvetica, sans-serif;
// 	text-decoration: none;
// 	margin: 10px;
// `;

// export const Logo = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin: 10px;
// 	font-size: 2.5rem;
// 	font-weight: bold;
// 	color: white;
// `;

// export const OpenLinksButton = styled.button`
// 	width: 70px;
// 	height: 50px;
// 	background: none;
// 	border: none;
// 	color: white;
// 	font-size: 45px;
// 	cursor: pointer;

// 	@media (min-width: 700px) {
// 		display: none;
// 	}
// `;

// export const NavbarExtendedContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%; // Make sure it takes full width

// 	@media (min-width: 700px) {
// 		display: none; // Ensures it only displays in mobile view
// 	}
// `;

import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const NavbarContainer = styled.nav`
	width: 100%;
	background-color: #1d1d1d;
	display: flex;
	flex-direction: column;
	transition: height 0.3s ease-in-out;
	height: ${(props) =>
		props.showNavbar ? '100%' : '80px'}; // Adjust height based on state

	@media (min-width: 700px) {
		height: 80px;
	}
`;

export const LeftContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 5%;

	@media (min-width: 700px) {
		padding-left: 0%;
	}
`;

// export const LeftContainer = styled.div`
// 	flex: 40%;
// 	display: flex;
// 	align-items: center;
// 	padding-left: 5%;
// `;

export const RightContainer = styled.div`
	flex: 3;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding-right: 20px;
	padding-left: 30px;

	@media (min-width: 700px) {
		justify-content: space-between;
	}

	a {
		color: #4a4f47;
	}

	@media (min-width: 1024px) {
		justify-content: space-evenly;
	}
`;

// export const RightContainer = styled.div`
// 	flex: 60%;
// 	display: flex;
// 	justify-content: flex-end;
// 	align-items: center;
// 	padding-right: 50px;

// a {
// 		color: #4a4f47;
// 	}

// 	@media (min-width: 1024px) {
// 		justify-content: space-evenly;
// 	}
// `;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
`;

// export const NavbarInnerContainer = styled.div`
// 	width: 100%;
// 	height: 80px;
// 	display: flex;
// `;

// export const NavbarLinkContainer = styled.div`
// 	display: flex;
// `;

export const Logo = styled.h1`
	color: white;
	margin: 0;
	font-size: 2.5rem;
`;

// export const Logo = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	margin: 10px;
// 	font-size: 2.5rem;
// 	font-weight: bold;
// 	color: white;
// `;

export const OpenLinksButton = styled.button`
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;

	@media (min-width: 700px) {
		display: none;
	}
`;

// export const OpenLinksButton = styled.button`
// 	width: 70px;
// 	height: 50px;
// 	background: none;
// 	border: none;
// 	color: white;
// 	font-size: 45px;
// 	cursor: pointer;

// 	@media (min-width: 700px) {
// 		display: none;
// 	}
// `;

export const NavbarLink = styled(LinkScroll)`
	color: white;
	font-size: 25px;
	text-decoration: none;
	margin: 0 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		color: #4c86a8;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

// export const NavbarLink = styled(LinkScroll)`
// 	color: white;
// 	font-size: x-large;
// 	font-family: Arial, Helvetica, sans-serif;
// 	text-decoration: none;
// 	margin: 10px;
// 	cursor: pointer;

// 	transition: all 0.3s ease-in-out;

// 	&:hover {
// 		color: #4c86a8;
// 	}

// 	@media (max-width: 700px) {
// 		display: none;
// 	}
// `;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: 700px) {
		display: none;
	}
`;

// export const NavbarExtendedContainer = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	width: 100%; // Make sure it takes full width

// 	@media (min-width: 700px) {
// 		display: none; // Ensures it only displays in mobile view
// 	}
// `;

export const NavbarRLink = styled(LinkScroll)`
	color: #4a4f47;
	font-size: 20px;
	text-decoration: none;
	padding: 10px;
`;
