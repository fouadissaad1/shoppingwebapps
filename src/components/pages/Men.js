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
import './Men.css'
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
                    <MDBCard style={{maxWidth: '20rem'}}>
                        <img src={mens.image} width={300} alt="About"/>
                          <MDBCardBody>
                            <MDBCardTitle className="red-text">{mens.name}</MDBCardTitle>
                            <MDBCardText className={"menText"}>

                                Size: {mens.size}  <br/>
                                Color: {mens.color}     <br/>
                                How much: {mens.prijs}&euro;
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
                        <MDBCol md={6}/>
                        <MDBCol md={4}>
                            <br/>
                            <h2 className="titlePage">Men</h2>
                        </MDBCol>
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