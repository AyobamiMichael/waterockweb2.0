import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/registerdrug' activestyle='true'>
			Add Product
		</NavLink>
		<NavLink to='/events' activestyle ='true'>
			Update Pharmacy
		</NavLink>
		<NavLink to='/viewdrugs' activestyle='true'>
			Products
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/logout' activestyle='true'>Log Out</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
