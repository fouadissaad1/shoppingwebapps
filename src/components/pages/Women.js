import React from "react";

import {
    MDBBtn,
    MDBCard, MDBCardBody, MDBCardText, MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import { WOMEN_CLOTHING_DATA } from "../../data/data";

function Category(props) {
    const {category} = props;
    return <div>
        <h3>{category.name}</h3>
        {
            category.womenProduts.map((p) => <Women key={p.name} women={p}/>)
        }
    </div>
}
function Women(props) {
    const {women} = props;
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <MDBCard style={{maxWidth: '22rem'}}>
                        {women.image}
                        <MDBCardBody>
                            <MDBCardTitle>{women.name}</MDBCardTitle>
                            <MDBCardText>
                                <p className="pMenStyle">size: {women.size} </p>
                                <p className="pMenStyle">color: {women.color}</p>
                                <p className="pMenStyle">how much: {women.prijs}&euro;</p>
                            </MDBCardText>
                            <MDBBtn href='#'>Ordre</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
export function Womens(){
    return(
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <h2>Women</h2>
                    <hr/>
                </MDBRow>
                <MDBRow>
                    {WOMEN_CLOTHING_DATA.map((c, i) =>
                        <MDBCol>
                            <Category category={c} key={i}/>
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Womens;