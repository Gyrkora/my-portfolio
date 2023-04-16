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
} from '../styles/Navbar.style';
import { useState } from 'react';

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	return (
		<div>
			<NavbarContainer showNavbar={showNavbar}>
				<NavbarInnerContainer>
					<LeftContainer>
						<NavbarLinkContainer>
							<Logo>
								<p>GyrKode</p>
							</Logo>
						</NavbarLinkContainer>
					</LeftContainer>
					<RightContainer>
						<NavbarLink
							to="about"
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
						>
							About
						</NavbarLink>

						<NavbarLink
							to="proyects"
							spy={true}
							smooth={true}
							offset={-100}
							duration={400}
						>
							Proyects
						</NavbarLink>
						<NavbarLink
							to="skills"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Skills
						</NavbarLink>
						<NavbarLink
							to="blog"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Blog
						</NavbarLink>
						<NavbarLink
							to="contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
						>
							Contact
						</NavbarLink>
						<OpenLinksButton
							onClick={() => {
								setShowNavbar((current) => !current);
							}}
						>
							{showNavbar ? <>&#10005;</> : <>&#8801;</>}
						</OpenLinksButton>
					</RightContainer>
				</NavbarInnerContainer>

				{showNavbar && (
					<NavbarExtendedContainer>
						<NavbarRLink to="/">About</NavbarRLink>
						<NavbarRLink to="/">Proyects</NavbarRLink>
						<NavbarRLink to="/">Blog</NavbarRLink>
						<NavbarRLink to="/">Contact</NavbarRLink>
					</NavbarExtendedContainer>
				)}
			</NavbarContainer>
		</div>
	);
};

export default Navbar;

/* 

portfolio con link from gatsby
https://github.com/richidoes/Portfolio/blob/master/src/components/buttons/MenuButton.tsx 




*/
