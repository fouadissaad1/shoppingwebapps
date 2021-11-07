import React, { useEffect, useState } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import { getWomenFromDb } from "../../services/firestoreDatabase";
//import { WOMEN_CLOTHING_DATA } from "../../data/data";
// function Category(props) {
//
//       const {category} = props;
//       return <div>
//       <h3>{category.women.category}</h3>
//           {
//              category.womenProduts.map((p) => <Women key={p.name} women={p}/>)
//           }
//      </div>
//  }
import './Women.css'

function Women(props) {
    const {women} = props;
    return (
        <MDBContainer>
            <MDBRow/>
            <MDBRow>
                <MDBCol>
                    <MDBCard style={{maxWidth: '10rem'}}>
                        <img src={women.image} alt="women's"/>
                        <MDBCardBody>
                            <MDBCardTitle className="red-text">{women.name}</MDBCardTitle>
                            <MDBCardText>
                                size: {women.size} <br/>
                                color: {women.color}<br/>
                                how much: {women.prijs}&euro;
                            </MDBCardText>
                            <MDBBtn href='#'>Ordre</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export function Womens() {
    const [womenFromDd, setWomensFromDb] = useState([])

    async function LoadWomens() {
        const womens = await getWomenFromDb();
        console.log(womens);
        setWomensFromDb(womens);
    }

    useEffect(() => {
        LoadWomens();
    }, [])
    return (
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol md={6}/>
                    <MDBCol md={4}>
                        <br/>
                        <h2 className="titlePage">Women</h2>
                    </MDBCol>
                </MDBRow>
                {/*<MDBRow>*/}
                {/*    /!*  {WOMEN_CLOTHING_DATA.map((c, i) =>*/}
                {/*        <MDBCol>*/}
                {/*            <Category category={c} key={i}/>*/}
                {/*        </MDBCol>*/}
                {/*    )}*!/*/}
                {/*</MDBRow>*/}
                <br/>
                <MDBRow>
                    {
                        womenFromDd.map((c, i) =>
                            <MDBCol>
                                <Women women={c} key={i}/>
                            </MDBCol>)
                    }
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default Womens;