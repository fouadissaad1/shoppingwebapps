import "./Login.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { NavLink, useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import firebaseConfig from "../../../services/firestore";

function Login() {
    const [message, setMessage] = useState('')
    const setCookieFunction = (value) => {
        localStorage.setItem('email', value)
        setMessage('username set as cookie!!')
    }
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
                        <label className={"label"}>Username<br/>
                            <input type="email" name="email" placeholder="Email"
                                   onChange={(e) => setCookieFunction(e.target.value)}/>
                        </label><br/>
                        <label>Password <br/>
                            <input type="password" name="password" placeholder="password" />
                        </label>
                        <br/>
                        <button type="submit">Login</button>
                    </form>
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{message}</span>
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