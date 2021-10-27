import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { auth } from "firebase-admin/lib/auth/auth-namespace";
import firebaseConfig from "../../../services/firestore";

function Register() {
    firebaseConfig.auth()
        .createUserWithEmailAndPassword('test@yahoo.fr','ccccccccc')
        .then(()=>{
            console.log('user account created')
        })
    return (
        <MDBContainer>
            <br/><br/>
            <MDBRow>
                <MDBCol size={4}/>
                <MDBCol size={4}>
                    <h1>Sign up</h1>
                    <form >
                        <label for="email">
                            email <br/>
                            <input name="email" type="email" placeholder={"email"} required/>
                        </label>
                        <label for="password">
                            Password<br/>
                            <input name="Password" type={"Password"} placeholder={"Password"} />
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