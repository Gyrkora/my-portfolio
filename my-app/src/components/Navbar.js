// import {
// 	NavbarContainer,
// 	RightContainer,
// 	LeftContainer,
// 	NavbarInnerContainer,
// 	NavbarExtendedContainer,
// 	NavbarLinkContainer,
// 	NavbarLink,
// 	OpenLinksButton,
// 	NavbarRLink,
// 	Logo,
// } from '../styles/Navbar.style';
// import { useState } from 'react';

// const Navbar = () => {
// 	const [showNavbar, setShowNavbar] = useState(false);

// 	return (
// 		<div>
// 			<NavbarContainer showNavbar={showNavbar}>
// 				<NavbarInnerContainer>
// 					<LeftContainer>
// 						<NavbarLinkContainer>
// 							<Logo>
// 								<p>GyrKode</p>
// 							</Logo>
// 						</NavbarLinkContainer>
// 					</LeftContainer>
// 					<RightContainer>
// 						<NavbarLink
// 							to="about"
// 							spy={true}
// 							smooth={true}
// 							offset={-100}
// 							duration={500}
// 						>
// 							About
// 						</NavbarLink>

// 						<NavbarLink
// 							to="proyects"
// 							spy={true}
// 							smooth={true}
// 							offset={-100}
// 							duration={400}
// 						>
// 							Projects
// 						</NavbarLink>
// 						<NavbarLink
// 							to="skills"
// 							spy={true}
// 							smooth={true}
// 							offset={-100}
// 							duration={500}
// 						>
// 							Skills
// 						</NavbarLink>

// 						<NavbarLink
// 							to="contact"
// 							spy={true}
// 							smooth={true}
// 							offset={50}
// 							duration={500}
// 						>
// 							Contact
// 						</NavbarLink>
// 						<OpenLinksButton
// 							onClick={() => {
// 								setShowNavbar((current) => !current);
// 							}}
// 						>
// 							{showNavbar ? <>&#10005;</> : <>&#8801;</>}
// 						</OpenLinksButton>
// 					</RightContainer>
// 				</NavbarInnerContainer>

// 				{showNavbar && (
// 					<NavbarExtendedContainer>
// 						<NavbarRLink to="/">About</NavbarRLink>
// 						<NavbarRLink to="/">Proyects</NavbarRLink>
// 						<NavbarRLink to="/">Blog</NavbarRLink>
// 						<NavbarRLink to="/">Contact</NavbarRLink>
// 					</NavbarExtendedContainer>
// 				)}
// 			</NavbarContainer>
// 		</div>
// 	);
// };

// export default Navbar;

import React, { useState } from 'react';
import {
	NavbarContainer,
	RightContainer,
	LeftContainer,
	NavbarInnerContainer,
	NavbarExtendedContainer,
	NavbarLinkContainer,
	NavbarLink,
	OpenLinksButton,
	NavbarRLink,
	Logo,
} from '../styles/Navbar.style'; // Ensure this path matches your file structure

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<NavbarContainer showNavbar={showNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<Logo>GyrKode</Logo>
				</LeftContainer>
				<RightContainer>
					<OpenLinksButton onClick={() => setShowNavbar((prev) => !prev)}>
						{showNavbar ? '×' : '≡'}
					</OpenLinksButton>
					{!showNavbar && (
						<React.Fragment>
							<NavbarLink to="about">About</NavbarLink>
							<NavbarLink to="projects">Projects</NavbarLink>
							<NavbarLink to="skills">Skills</NavbarLink>
							<NavbarLink to="contact">Contact</NavbarLink>
						</React.Fragment>
					)}
				</RightContainer>
			</NavbarInnerContainer>
			{showNavbar && (
				<NavbarExtendedContainer>
					<NavbarRLink to="about">About</NavbarRLink>
					<NavbarRLink to="projects">Projects</NavbarRLink>
					<NavbarRLink to="skills">Skills</NavbarRLink>
					<NavbarRLink to="contact">Contact</NavbarRLink>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
};

export default Navbar;

// portfolio con link from gatsby
// https://github.com/richidoes/Portfolio/blob/master/src/components/buttons/MenuButton.tsx
