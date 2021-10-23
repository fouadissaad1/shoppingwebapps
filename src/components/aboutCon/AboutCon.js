import '../pages/About.css'
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";

export function Teams(props) {
    const {teams} = props;
    return <MDBTable striped>
        <MDBTableHead color="primary-color" textWhite>
            <tr>
                <th>Name:</th>
                <th>Description</th>
                <th>Picture</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            <tr>
                <td>{teams.name}</td>
                <td>{teams.description} <br/>{teams.email}</td>
                <th></th>
                <td><img src={teams.image} width={500} alt="About"/></td>
            </tr>
        </MDBTableBody>
    </MDBTable>
}

export function AboutCon() {
    return <div>
        <h2>About</h2>
        <h1>Since 2021</h1>
        <p className="pAboutStyle"> has been the premium lifestyle accessory brand of choice for
            independents, creatives, and free-thinkers the world over</p>
        <h2>Team</h2>
        <br/>
    </div>
}