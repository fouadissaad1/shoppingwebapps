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
import { getChilderenFromDb } from "../../services/firestoreDatabase";
//import { Kids_data } from "../../data/data";
// function Category(props) {
//     const {category} = props;
//     const [show, setShow] = useState(!false);
//     const toggle = () => setShow(!show);
//     return <div>
//         <MDBBtn onClick={toggle}>
//             <h3>{category.title} {category.name}</h3>
//         </MDBBtn>
//         <MDBCollapse show={show}>
//             {
//                 category.KidPruducts.map((p) =>
//                     <MDBCard>
//                         <MDBCardBody>
//                             <Childs key={p.id} kid={p}/>
//                         </MDBCardBody>
//                     </MDBCard>
//                 )
//             }
//         </MDBCollapse>
//
//     </div>
// }
function Childs(props) {
    const {childs} = props;
    return <MDBContainer>
        <MDBRow>
            <MDBCol>
                <MDBCard style={{maxWidth: '22rem'}}>
                    <img src={childs.image} width={300} alt="childeren"/>
                    <MDBCardBody>
                        <MDBCardTitle className="red-text">{childs.name}</MDBCardTitle>
                        <MDBCardText>
                            color: {childs.color}
                        </MDBCardText>
                        <MDBCardText>
                            how much: {childs.price}&euro;
                        </MDBCardText>
                        <MDBBtn href='#'>Ordre</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
}

export function Children() {
    const [childerenFromDb, setChilderenFromDb] = useState([])

    async function LoadChilderen() {
        const childeren = await getChilderenFromDb();
        console.log(childeren);
        setChilderenFromDb(childeren);
    }
    useEffect(() => {
        LoadChilderen();
    }, [])
    return (
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <h2>CHILDREN</h2>
                </MDBRow>
                <MDBRow>
                    {/*{
                        Kids_data.map((c, i) =>
                            <MDBCol>
                                <Category category={c} key={i}/>
                            </MDBCol>
                        )
                    }*/}

                    {
                        childerenFromDb.map((c, i) =>
                            <MDBCol>
                                <Childs childs={c} key={i}/>
                            </MDBCol>)
                    }
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default Children;