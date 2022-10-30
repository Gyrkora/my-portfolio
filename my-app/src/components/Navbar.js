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
} from '../styles/Navbar.style'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

const Navbar = () => {
	const [showNavbar, setShowNavbar] = useState(false)

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
						<NavbarLink to="/">About</NavbarLink>
						<NavbarLink to="/">Proyects</NavbarLink>
						<NavbarLink to="/">Blog</NavbarLink>
						<NavbarLink to="/">Contact</NavbarLink>
						<OpenLinksButton
							onClick={() => {
								setShowNavbar((current) => !current)
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
	)
}

export default Navbar

/* 

portfolio con link from gatsby
https://github.com/richidoes/Portfolio/blob/master/src/components/buttons/MenuButton.tsx 




*/
