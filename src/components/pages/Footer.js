import './footer.css'
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <MDBFooter className="footer">
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md="4">
                        <h5>Exclusive Services</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Book">Book an Appointement</Link>
                            </li>
                            <li>
                                <Link to="/Services">Exclusive Online Services</Link>
                            </li>
                            <li>
                                <Link to="/Delivery">Delivery</Link>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Contact">Contact us</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="4">
                        <h5 className="title">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/Men">Men's Wear</Link>
                            </li>
                            <li>
                                <Link to="/Women">Women's Wear</Link>
                            </li>
                            <li>
                                <Link to="/Children">Children</Link>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <p> &copy; {new Date().getFullYear()} Belgium Country Clothing • Fouad ISSAAD</p>
                </MDBContainer>
            </div>
        </MDBFooter>);
}

export default Footer;