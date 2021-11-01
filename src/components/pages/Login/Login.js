import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { NavLink, useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import firebaseConfig from "../../../services/firestore";
import { MDBLink } from "mdbreact";

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
                <MDBCol md="3"/>
                <MDBCol md="6">
                    <h1 className="text-center md-4">
                        <MDBIcon icon="lock"/>
                        Login</h1>
                    <br/>
                    <form onSubmit={handleLogin}>
                        <br/>
                        <div className="grey-text">
                            <MDBIcon icon="envelope"/>
                            <MDBInput label="type your email" type="email" name="email" placeholder="Email"
                                      onChange={(e) => setCookieFunction(e.target.value)}/>
                            <MDBIcon icon="lock"/>
                            <MDBInput label="Type your password" name="password" placeholder="Password"/>
                            <br/>
                        </div>
                        <div className="text-center">
                            <MDBBtn type="submit">Login</MDBBtn>
                        </div>

                    </form>
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{message}</span>
                    <br/>
                    <div>
                        <p className="font-small grey-text mt-3">
                            Don't have en account? <NavLink to="/Register" className="text-white ml-1 font-weight-bold"
                                                            aria-current="page">Register</NavLink>
                        </p>
                    </div>
                    <div>
                        <p className="font-small grey-text mt-3">
                            Forgot
                            <NavLink to="#" className="text-white ml-1 font-weight-bold"
                                     aria-current="page">Password</NavLink>
                        </p>
                    </div>



                </MDBCol>


            </MDBRow>
            <MDBRow/>
        </MDBContainer>
    )
}

export default Login