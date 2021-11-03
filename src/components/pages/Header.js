import './Header.css'
import { MDBIcon, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { MDBAnimation, MDBNavItem } from "mdbreact";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const [open, setOpen]=useState(false);

    return (
        <>
            <MDBNavbar className="navbar">
                <MDBNavbarBrand className="brand-title">
                    <MDBAnimation type="bounce" infinite>
                        <strong className="white-text">Shopping</strong>
                    </MDBAnimation>
                </MDBNavbarBrand>
                <a href={"#"} className="toggle-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">
                    <ul className="navbar-links">
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
                    </ul>
                    <i onClick={()=>setOpen(!open)} className="navbar-links" navbar></i>
                </div>

            </MDBNavbar>

        </>
    );
}

export default Header;