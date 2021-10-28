import "./Login.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { NavLink, useHistory } from "react-router-dom";
import { useCallback } from "react";
import firebaseConfig from "../../../services/firestore";

function Login() {
    const history = useHistory();
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const {email, password} = event.target.elements;
            try {
                await firebaseConfig
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/Logout")

            } catch (error) {
                alert(error);
            }
        },
        []
    );

    return (<MDBContainer>
            <br/><br/>
            <MDBRow>
                <MDBCol size={4}>

                </MDBCol>
                <MDBCol size={4}>
                    <h1>Login</h1>
                    <br/>
                    <form onSubmit={handleLogin}>
                        <label className={"label"}>Username
                            <input type="email" name="email" placeholder="Email"/>
                        </label><br/>
                        <label>Password
                            <input type="password" name="password" placeholder="password"/>
                        </label><br/>
                        <button type="submit">Login</button>
                    </form>
                    <br/>
                    <NavLink to="/Register" className="nav-link" aria-current="page">Register</NavLink>
                </MDBCol>
                <MDBCol size={4}></MDBCol>
            </MDBRow>
            <MDBRow/>
        </MDBContainer>
    )
}

export default Login