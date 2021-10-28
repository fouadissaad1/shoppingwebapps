import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";
import welkomCoatsForWomen from '../../images/welcome/abdf6295852cb3fa42bb5b55556848a6.jpg';
import welkomCoatsForMen from '../../images/welcome/diy-cat-costumes-1565110063.jpg';
import welkomCoatsForChilderen from '../../images/welcome/JenniferKellyG-201635210035178721None.jpg';
import welkomCoatsFkid2 from '../../images/welcome/kids1.jpg';

function Home() {
    return (
        <>
            <MDBContainer fluid className="purple-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1">
                <br/> <br/>
                <MDBRow>
                    <MDBCol lg="3">
                        <h1 className="red-text flex-center">COATS FOR</h1>
                    </MDBCol>
                    <MDBCol lg="3">
                        <MDBIcon icon="check"/>   <p>Women's</p>
                    </MDBCol>
                    <MDBCol lg="3">
                        <MDBIcon icon="check"/> <p>Men's</p>
                    </MDBCol>
                    <MDBCol lg="3">
                        <MDBIcon icon="check"/>  <p>Kids</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol lg="3" md="12">
                        <img src={welkomCoatsForMen} className="img-fluid z-depth-1" alt=""/>
                    </MDBCol>
                    <MDBCol lg="3" md="12">
                        <img src={welkomCoatsForWomen} className="img-fluid z-depth-1-half"
                             alt=""/>
                    </MDBCol>
                    <MDBCol lg="3" md="12">
                        <img src={welkomCoatsForChilderen} className="img-fluid z-depth-1-half"
                             alt=""/>
                    </MDBCol>
                    <MDBCol lg="3" md="12">
                        <img src={welkomCoatsFkid2} className="img-fluid z-depth-1-half"
                             alt=""/>
                    </MDBCol>
                    <MDBRow>
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default Home