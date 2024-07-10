import React from 'react';
import './navbar.css';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,

} from './navbarelements';
// MAIN NAVBAR FOR ALL
const Navbar = () => {
return (
	<>
	<Nav className='drugsNavbar'>
		<Bars />
		<NavMenu>
        <NavLink to='/' activeStyle>
			Home	
		</NavLink>
        <NavLink to='/landingpage' activeStyle>
			Pharmacies
		</NavLink>
        <NavLink to='/fooditems' activeStyle>
			Groceries
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/contactus' activeStyle>
			Contact Us
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;


/**
 * <NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>

		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
 */