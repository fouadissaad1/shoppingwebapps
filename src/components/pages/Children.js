import React, { useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBCollapse,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import { Kids_data } from "../../data/data";
function Category(props) {
    const {category} = props;
    const [show, setShow] = useState(!false);
    const toggle = () => setShow(!show);
    return <div>
        <MDBBtn onClick={toggle}>
            <h3>{category.title} {category.name}</h3>
        </MDBBtn>
        <MDBCollapse show={show}>
            {
                category.KidPruducts.map((p) =>
                    <MDBCard>
                        <MDBCardBody>
                            <Kid key={p.id} kid={p}/>
                        </MDBCardBody>
                    </MDBCard>
                )
            }
        </MDBCollapse>

    </div>
}
function Kid(props) {
    const {kid} = props;
    return <MDBContainer>
        <MDBRow>
            <MDBCol>
                <MDBCard style={{maxWidth: '22rem'}}>
                    {kid.image}
                    <MDBCardBody>
                        <MDBCardTitle>{kid.name}</MDBCardTitle>
                        <MDBCardText>
                            <p className="pMenStyle">color: {kid.color}</p>
                            <p className="pMenStyle">how much: {kid.price}&euro;</p>
                        </MDBCardText>
                        <MDBBtn href='#'>Ordre</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
}
export function Children(){
    return(
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <h2>CHILDREN</h2>
                </MDBRow>
                <MDBRow>
                    {
                        Kids_data.map((c, i) =>
                            <MDBCol>
                                <Category category={c} key={i}/>
                            </MDBCol>
                        )
                    }

                </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Children;
