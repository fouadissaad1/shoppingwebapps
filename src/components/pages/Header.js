import './Header.css'
import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav } from "mdb-react-ui-kit";
import { MDBAnimation, MDBNavItem } from "mdbreact";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [openMenu, setOpenMenu]=useState(false);
    const toggleMenu=()=>setOpenMenu(!openMenu);

    return (
        <>
            <MDBNavbar className="navbar">
                <MDBNavbarBrand className="brand-title">
                    <MDBAnimation type="bounce" infinite>
                        <h3 className="white-text">Shopping</h3>
                    </MDBAnimation>
                </MDBNavbarBrand>
                <MDBContainer className="navbar-links">
                    <a className="toggle-button" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>

                    <MDBCollapse show={openMenu} navbar>
                        <MDBNavbarNav>
                            <MDBNavItem active>
                                <NavLink to="/" aria-current="page">Home</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Men" >Men</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Women">Women</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Children">Childeren</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/About">About</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Contact" >Contact</NavLink>
                            </MDBNavItem>
                            <MDBNavItem className="navbar-item">
                                <NavLink to="/Login">
                                    <MDBIcon icon="user">
                                        Login
                                    </MDBIcon>
                                </NavLink>
                            </MDBNavItem>
                        </MDBNavbarNav >
                    </MDBCollapse>
                </MDBContainer>

            </MDBNavbar>

        </>
    );
}

export default Header;