import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
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
                <MDBCol size={4}/>
                <MDBCol size={4}>
                    <h1>Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            email <br/>
                            <input name="email" type="email" placeholder={"email"} required/>
                        </label>
                        <label htmlFor="password">
                            Password<br/>
                            <input name="password" type={"Password"} placeholder={"Password"}/>
                            <br/><br/>
                            <button type={"submit"}>Sign Up</button>
                        </label>
                    </form>
                </MDBCol>
                <MDBCol size={4}/>
            </MDBRow>
        </MDBContainer>
    )
}

export default Register