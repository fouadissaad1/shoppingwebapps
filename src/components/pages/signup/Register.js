import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

function Register(){
    return(
        <MDBContainer>
            <br/><br/>
            <MDBRow>
                <MDBCol size={4}/>
                <MDBCol size={4}>
                    <h1>Sign up</h1>
                    <form>
                        <label>
                            email <br/>
                            <input name="email" type="email" placeholder={"email"} required/>
                        </label>
                        <label>
                            Password<br/>
                            <input name="Password" type={"Password"} placeholder={"Password"} required/><br/><br/>
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