import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { useEffect, useState } from "react";
//import { MEN_CLOTHING_DATA } from "../../data/data";
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
//     return <MDBRow>
//         <MDBCol>
//             <h3 className="title">{category.name}</h3>
//         </MDBCol>
//         <MDBCol>
//             {
//
//                 category.products.map((p) => <Mens key={p.id} men={p}/>)
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
                            <MDBCardTitle>{mens.name}</MDBCardTitle>
                            <MDBCardText>
                                <p className="pMenStyle">size: {mens.size} </p>
                                <p className="pMenStyle">color: {mens.color}</p>
                                <p className="pMenStyle">how much: {mens.prijs}&euro;</p>
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

//    const [mensList, setmensList] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const ref = firestore.firestore().collection("mens");
//     console.log(getMens)
//
//     function getMens() {
//         setLoading(true);
//         ref.onSnapshot((querySnapshot) => {
//             const items = [];
//             querySnapshot.forEach((doc) => {
//                 items.push(doc.data());
//                 console.log(doc.data())
//             });
//             setmensList(items);
//             setLoading(false);
//         });
//     }
//
//     useEffect(() => {
//         getMens();
//     }, []);
//     if (loading) {
//         return <h1>loading...</h1>
//     }
// console.log(mensList)

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