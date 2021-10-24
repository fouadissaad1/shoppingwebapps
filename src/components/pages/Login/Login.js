import "./Login.css"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

function Login() {

    return (<MDBContainer>
            <br/><br/>
            <MDBRow>
                <MDBCol size={4}>

                </MDBCol>
                <MDBCol size={4}>
                    <h1>Login</h1>
                    <br/>
                    <form>
                        <label className={"label"}>Username
                            <input type="text" name="username" placeholder="username"/>
                        </label><br/>
                        <label>Password
                            <input type="password" name="password" placeholder="password"/>
                        </label><br/>
                        <button type="submit">Login</button>
                    </form>
                </MDBCol>
                <MDBCol size={4}></MDBCol>
            </MDBRow>
            <MDBRow/>
        </MDBContainer>

    )
}

export default Login