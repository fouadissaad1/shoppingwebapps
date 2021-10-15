import React from "react";


const SignUp = () => {

    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <label for="email">Email</label>
                <input type="email" name="email" placeholder="Email" />
                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default SignUp;