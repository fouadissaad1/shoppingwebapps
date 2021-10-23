import { NavLink } from 'react-router-dom';
import { MDBCollapse, MDBContainer, MDBIcon, MDBNavbarBrand, MDBNavbarToggler } from "mdb-react-ui-kit";
import { MDBAnimation, MDBNavbar, MDBNavItem } from "mdbreact";
import { useState } from "react";

export function Header (){
    const [open, setOpen] = useState(true);
    return (
        <>
            <MDBContainer fluid>
                <MDBNavbar  color="default-color" dark expand="md">
                    <MDBNavbarBrand>
                        <MDBAnimation type="bounce" infinite>
                            <strong className="white-text">Shopping</strong>
                        </MDBAnimation>
                    </MDBNavbarBrand >
                    <MDBNavbarToggler onClick={() => setOpen(!open)}/>
                    <MDBCollapse in={open} navbar={MDBNavbar}>
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
                    </MDBCollapse>
                </MDBNavbar>
            </MDBContainer>

        </>
    );
}

export default Header;