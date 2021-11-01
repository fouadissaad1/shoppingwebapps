import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import firebaseConfig from "../../../services/firestore";
import { useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;
        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push("/")

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('That email address is already in use!')
            }

            if (error.code === 'auth/invalid-email') {
                alert('That email address is invalid!')
            }
        }
    };
    return (
        <MDBContainer>
            <br/><br/>
            <MDBRow>
                <MDBCol size="3"/>
                <MDBCol size="6">
                    <h1 className="text-center md-4">
                        <MDBIcon icon="user-plus"/>
                        Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <br/>
                        <div className="grey-text">
                            <MDBIcon icon="envelope"/>
                            <MDBInput name="email" type="email" placeholder={"email"} required/>
                            <MDBIcon icon="lock"/>
                            <MDBInput name="password" type={"Password"} placeholder={"Password"} required/>
                            <br/>
                        </div>
                        <div className="text-center">
                            <MDBBtn type={"submit"}>Sign Up</MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Register