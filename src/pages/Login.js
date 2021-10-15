import React from "react";
import {  MDBContainer, MDBRow } from "mdb-react-ui-kit";


export function Login(){

    return(
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <h2>Login</h2>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                        <button type="submit">Submit</button>
                    </form>
                </MDBRow>
                <MDBRow>

                </MDBRow>
            </MDBContainer>
        </>
    )
}
export default Login;

