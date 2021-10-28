import './Header.css';
import { NavLink } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBNavbarBrand } from "mdb-react-ui-kit";
import { MDBAnimation, MDBHamburgerToggler, MDBNavbar, MDBNavItem } from "mdbreact";
import { useState } from "react";


export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <>
            <MDBContainer fluid>
                <MDBNavbar className="navbar">
                    <MDBNavbarBrand className="brand-title">
                        <MDBAnimation type="bounce" infinite>
                            <strong className="white-text">Shopping</strong>
                        </MDBAnimation>
                    </MDBNavbarBrand>
                    <MDBHamburgerToggler className="toggle-button" id="hamburger1" color="#d3531a" onClick={toggle}/>
                    <div className="navbar-links">
                        <ul>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Men" className="nav-link">Men</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Women" className="nav-link">Women</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Children" className="nav-link">Childeren</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/About" className="nav-link">About</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Login" className="nav-link">
                                    <MDBIcon icon="user">
                                        Login
                                    </MDBIcon>
                                </NavLink>
                            </MDBNavItem>
                        </ul>
                    </div>
                </MDBNavbar>
            </MDBContainer>
        </>
    );
}

export default Header;