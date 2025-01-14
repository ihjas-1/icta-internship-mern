import React from 'react'
import './css/Login.css'

const SignUp = () => {
    return (
        <div class="container">
            <h1>Create Account</h1>
            <form>
                <input type='username' placeholder='Username' />
                <input type='email' placeholder='Email' />
                <input type='password' placeholder='Password' />
                <button class="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp