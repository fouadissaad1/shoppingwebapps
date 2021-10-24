import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";


export function Login(){

    return(
        <>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol size="1"></MDBCol>
                    <MDBCol size="4">
                        <br/>
                        <h2>Login</h2>
                    </MDBCol>
                    <MDBCol size="4">
                        <br/>
                        <h2>Hello, Friend</h2>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol size="1"></MDBCol>
                    <MDBCol size="4">
                        <br/><br/>
                        <form>
                            <input type="email" name="email" placeholder="Email"/><br/> <br/>
                            <input type="password" name="password" placeholder="Password"/><br/><br/>
                            <button type="submit">Login</button>
                        </form>
                    </MDBCol>
                    <MDBCol size="4">
                        <br/><br/>
                        <p>Enter your Personal Details and Start with Shopping</p> <br/>
                        <button type="submit">Sing up</button>
                    </MDBCol>
                </MDBRow>


            </MDBContainer>
        </>
    )
}
export default Login;

