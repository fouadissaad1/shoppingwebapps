import './Contact.css'
import { MDBBtn, MDBCol, MDBCollapse, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import {
    Business,
    Consumer,
    ContactInformation,
    Payments,
    ServiceWarranty
} from "../contactInformation/ContactInformation";

export function Contact() {
    const [showBusiness, setusiness] = useState(false);
    const [showShowInformation, setshowShowInformation] = useState(false);
    const [showConsumer, setShowConsumer] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showPayments, setShowPayments] = useState(false);
    const toggleBusiness = () => setusiness(!showBusiness);
    const togglesInformation = () => setshowShowInformation(!showShowInformation);
    const togglesConsumer = () => setShowConsumer(!showConsumer);
    const togglesServices = () => setShowServices(!showServices);
    const togglesPayments = () => setShowPayments(!showPayments);
    return (
        <>
            <React.Fragment>
                <br/>
                <MDBRow>
                    <MDBCol size="4"></MDBCol>
                    <MDBCol size="4">
                        <MDBBtn onClick={togglesInformation}>Contact information</MDBBtn>
                        <MDBCollapse show={showShowInformation}>
                            <ContactInformation/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol size="4"/>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4"></MDBCol>
                    <MDBCol size="4">
                        <MDBBtn onClick={togglesConsumer}>Consumer</MDBBtn>
                        <MDBCollapse show={showConsumer}>
                            <Consumer/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol size="4">

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4"></MDBCol>
                    <MDBCol size="4">
                        <MDBBtn onClick={togglesServices}>Service and warranty</MDBBtn>
                        <MDBCollapse show={showServices}>
                            <ServiceWarranty/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol size="4"></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4"></MDBCol>
                    <MDBCol size="4">
                        <MDBBtn onClick={togglesPayments}>Payments and administrative</MDBBtn>
                        <MDBCollapse show={showPayments}>
                            <Payments/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol size="4"></MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="4"></MDBCol>
                    <MDBCol size="4">
                        <MDBBtn onClick={toggleBusiness}>For Business</MDBBtn>
                        <MDBCollapse show={showBusiness}>
                            <Business/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol size="4"></MDBCol>
                </MDBRow>
            </React.Fragment>
        </>
    )
}

export default Contact