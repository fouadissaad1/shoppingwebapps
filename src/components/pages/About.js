import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { AboutCon, Teams } from "../aboutCon/AboutCon";
import '../../services/firestore';
import firestore from "firebase/compat";



export function About(){
    const [teamsList, setTeamsList]=useState([]);
    const [loading, setLoading]=useState(false);
    const ref=firestore.firestore().collection("teams");
    function getTeams(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) =>{
            const items=[];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
                console.log(doc.data())
            });
            setTeamsList(items);
            setLoading(false);
        });
    }
    useEffect(()=>{
        getTeams();
    },[]);
    if (loading){
        return <h1>loading...</h1>
    }
    return(
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12" sm="6" lg="8">
                        <AboutCon/>
                        {
                            teamsList.map((p) => <Teams key={p.id} teams={p}/>)
                        }
                    </MDBCol>
                    <MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}