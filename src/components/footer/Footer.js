import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../../../node_modules/normalize.css/normalize.css';
import React from "react";
import { MDBCol, MDBContainer, MDBFooter, MDBRow } from "mdbreact";




function Footer() {
    return (

        <MDBFooter color="blue" className="font-small pt-6 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Exclusive Services</h5>
                        <ul className="list-unstyled">
                            <li>
                                  <a href="/Book">Book an Appointement</a>
                            </li>
                            <li>
                                <a href="/Services">Exclusive Online Services</a>
                            </li>
                            <li >
                                <a href="/Delivery">Delivery</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <ul  className="list-unstyled">
                            <li >
                                <a href="/Contact">Contact us</a>
                            </li>
                            <li>
                                <a href="/About">About</a>
                            </li>
                            <li>
                                <a href="/Men">Men's Wear</a>
                            </li>
                            <li >
                                <a href="/Women">Women's Wear</a>
                            </li>
                            <li >
                                <a href="/Children">Children</a>
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