import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";
import React from "react";
import { Link } from "react-router-dom";
function Footer() {


    return (

        <MDBFooter color="blue" className="font-small pt-6 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Exclusive Services</h5>
                        <ul className="list-unstyled">
                            <li>

                                <Link to="/Book">Book an Appointement</Link>
                            </li>
                            <li>
                                <Link to="/Services">Exclusive Online Services</Link>
                            </li>
                            <li >
                                <Link to="/Delivery">Delivery</Link>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul  className="list-unstyled">
                            <li >
                                <Link to="/Contact">Contact us</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Men">Men's Wear</Link>
                            </li>
                            <li >
                                <Link to="/Women">Women's Wear</Link>
                            </li>
                            <li >
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