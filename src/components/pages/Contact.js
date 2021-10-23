import { MDBBtn, MDBCol, MDBCollapse, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Business, Consumer, ContactInformation, Payments, ServiceWarranty } from "../contactInformation/ContactInformation";


export function Contact(){
    const [showShow, setShowShow] = useState(false);
    const toggleShow = () => setShowShow(!showShow);
    return(
        <>
            <React.Fragment>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <MDBRow/>
                <MDBRow color={"red"}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MDBCol lg={1}/>
                    <MDBCol lg={2}>

                        {/* eslint-disable-next-line react/jsx-no-undef,no-undef */}
                        <MDBBtn onClick={toggleShow}>Contact information</MDBBtn>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <MDBCollapse show={showShow}>
                            <ContactInformation/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol lg={2}>
                        <MDBBtn onClick={toggleShow}>Consumer</MDBBtn>
                        <MDBCollapse show={showShow}>
                            <Consumer/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol>
                        <MDBBtn onClick={toggleShow}>Service and warranty</MDBBtn>
                        <MDBCollapse show={showShow}>
                            <ServiceWarranty/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol lg={2}>
                        <MDBBtn onClick={toggleShow}>Payments and administrative</MDBBtn>
                        <MDBCollapse show={showShow}>
                            <Payments/>
                        </MDBCollapse>
                    </MDBCol>
                    <MDBCol lg={2}>
                        <MDBBtn onClick={toggleShow}>For Business</MDBBtn>
                        <MDBCollapse show={showShow}>
                            <Business/>
                        </MDBCollapse>

                    </MDBCol>
                    <MDBCol lg={1}/>
                </MDBRow>
                <MDBRow/>

            </React.Fragment>
        </>
    )
}
export default Contact