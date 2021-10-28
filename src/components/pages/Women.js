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
function Women(props) {
    const {women} = props;
    return (
        <MDBContainer>
            <MDBRow>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBCard style={{maxWidth: '22rem'}}>
                        <img src={women.image} width={300} alt="women's"/>
                        <MDBCardBody>
                            <MDBCardTitle className="red-text">{women.name}</MDBCardTitle>
                            <MDBCardText>
                                size: {women.size}
                            </MDBCardText>
                            <MDBCardText>
                                color: {women.color}
                            </MDBCardText>
                            <MDBCardText>
                                how much: {women.prijs}&euro;*
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
                    <h2>Women</h2>
                    <hr/>
                </MDBRow>
                <MDBRow>
                    {/*  {WOMEN_CLOTHING_DATA.map((c, i) =>
                        <MDBCol>
                            <Category category={c} key={i}/>
                        </MDBCol>
                    )}*/}
                </MDBRow>
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