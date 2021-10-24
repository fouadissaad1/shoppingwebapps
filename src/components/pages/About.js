import './About.css'
import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { AboutCon, Teams } from "../aboutCon/AboutCon";
import { getTeamsFromDb } from "../../services/firestoreDatabase";

export function About() {
    const [teamsFromDb, setTeamsFromDB] = useState([]);

    async function LoadTeams() {
        const teams = await getTeamsFromDb();
        console.log(teams);
        setTeamsFromDB(teams);
    }

    useEffect(() => {
        LoadTeams();

    }, [])
    return (
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12" sm="6" lg="8">
                        <AboutCon/>
                        {
                            teamsFromDb.map((p) => <Teams key={p.id} teams={p}/>)
                        }
                    </MDBCol>
                    <MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}