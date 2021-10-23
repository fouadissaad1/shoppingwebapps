import './Header.css';
import { NavLink } from 'react-router-dom';
import {  MDBIcon, MDBNavbarBrand, MDBNavbarToggler } from "mdb-react-ui-kit";
import { MDBAnimation, MDBNavbar, MDBNavItem } from "mdbreact";
import { useState } from "react";
export function Header() {
    const [open, setOpen] = useState(true);
    return (
        <>
            <MDBNavbar className="navbar">
                <MDBNavbarBrand className="brand-title">
                    <MDBAnimation type="bounce" infinite>
                        <strong className="white-text">Shopping</strong>
                    </MDBAnimation>
                </MDBNavbarBrand >
                <MDBNavbarToggler className="toggle-button" onClick={()=>setOpen(open)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </MDBNavbarToggler>
                <div  className="navbar-links">
                    <ul>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/Men" className="nav-link">MEN'S WEAR</NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/Women" className="nav-link">WOMEN'S WEAR</NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/Children" className="nav-link">CHILDREN</NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/About" className="nav-link">About</NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                        </MDBNavItem>
                        <MDBNavItem className="navbar-item">
                            <NavLink to="/Login" className="nav-link">
                                <MDBIcon icon="user">Login</MDBIcon>
                            </NavLink>
                        </MDBNavItem>
                    </ul>
                </div>

            </MDBNavbar>


        </>
    );
}

export default Header;