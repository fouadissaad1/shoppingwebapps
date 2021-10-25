function Register(){
    return(
        <div>
            <h1>Sign up</h1>
            <form>
                <label>
                    email
                    <input name="email" type="email" placeholder={"email"} required/>
                </label>
                <label>
                    Password
                    <input name="Password" type={"Password"} placeholder={"Password"} required/>
                    <button type={"submit"}>Sign Up</button>
                </label>
            </form>
        </div>
    )
}
export default Register