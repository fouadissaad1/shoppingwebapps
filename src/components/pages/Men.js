import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
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
import { getMensFromDb } from "../../services/firestoreDatabase";

// function Category(props) {
 //     const {category} = props;
 //
 //    return <MDBRow>
 //         <MDBCol>
 //             <h3 className="title">{category.name}</h3>
 //         </MDBCol>
 //         <MDBCol>
 //             {
 //
 //                category.products.map((p) => <Mens key={p.id} men={p}/>)
 //
 //             }
 //         </MDBCol>
 //     </MDBRow>
 // }

function Mens(props) {
    const {mens} = props;
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard style={{maxWidth: '22rem'}}>
                        <img src={mens.image} width={300} alt="About"/>
                          <MDBCardBody>
                            <MDBCardTitle className="red-text">{mens.name}</MDBCardTitle>
                            <MDBCardText>
                                size: {mens.size}
                            </MDBCardText>
                              <MDBCardText>
                               color: {mens.color}
                              </MDBCardText>
                              <MDBCardText>
                                how much: {mens.prijs}&euro;
                            </MDBCardText>
                            <MDBBtn href='#'>Ordre</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export function Men(){
    const [mensFromDb, setMensFromDB] = useState([]);
     async function LoadMens() {
         const mens = await getMensFromDb();
         console.log(mens);
         setMensFromDB(mens);
     }
     useEffect(()=>{
        LoadMens();

     },[])
    return(
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <h2>Men</h2>
                    <hr/>
                </MDBRow>
                <MDBRow>
                    {mensFromDb.map((c, i) =>
                        <MDBCol>
                            <Mens mens={c} key={i}/>
                        </MDBCol>
                    )}
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default Men