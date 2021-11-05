import './footer.css'
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <MDBFooter className="footer">
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md={9}>
                            <MDBRow>
                                <MDBCol md={3}>
                                    <Link to="/Book">Book an Appointement</Link>
                                </MDBCol>
                                <MDBCol md={3}>
                                    <Link to="/Services">Exclusive Online Services</Link>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <Link to="/Delivery">Delivery</Link>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <Link to="/Contact">Contact </Link>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <Link to="/About"> About</Link>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <Link to="/Men">Men </Link>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <Link to="/Women"> Women </Link>
                                </MDBCol>
                                <MDBCol md={1}>
                                    <Link to="/Children"> Children </Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md={3}>
                            <p> &copy; {new Date().getFullYear()} Belgium Country Clothing • Fouad ISSAAD</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </MDBFooter>);
}

export default Footer;