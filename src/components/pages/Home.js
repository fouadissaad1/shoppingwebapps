import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact";
import React from "react";

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
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2Fdiy-cat-costumes-1565110063.jpg?alt=media&token=b2ab3cda-10ae-4064-98f4-272ebb856397"
                            className="img-fluid z-depth-1" alt=""/>
                    </MDBCol>
                    <MDBCol lg="3" md="12">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2Fabdf6295852cb3fa42bb5b55556848a6.jpg?alt=media&token=eec82a32-f0f2-4e53-aac4-e25fa8a01c2c"
                            className="img-fluid z-depth-1-half"
                            alt=""/>
                    </MDBCol>
                    <MDBCol lg="3" md="12">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2FJenniferKellyG-201635210035178721None.jpg?alt=media&token=b2fba25c-720c-42db-94b6-6be39719e301"
                            className="img-fluid z-depth-1-half"
                            alt=""/>
                    </MDBCol>
                    <MDBCol lg="3" md="12">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2Fkids1.jpg?alt=media&token=77a5f3e9-c597-4632-bfcf-e5dac771e99d"
                            className="img-fluid z-depth-1-half"
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