import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { AboutCon, Teams } from "../components/aboutCon/AboutCon";
import { TEAM_DATA } from "../data/data";
export function About(){
    return(
        <>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="12" sm="6" lg="8">
                        <AboutCon/>
                        {
                            // eslint-disable-next-line no-undef,react/jsx-no-undef
                            TEAM_DATA.map((p) => <Teams key={p.id} teams={p}/>)
                        }
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}