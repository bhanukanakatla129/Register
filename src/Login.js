import React, { useState } from "react";
// import { Register } from "./Register";

export const Login = (props) => {

    const { email, setEmail } = useState('');
    const { pass, setPass } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (

        <div className="auth-form-container">

            <form  onSubmit={handleSubmit} >

                <label htmlfor="email"> Email </label>
                <input value={email} onchange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlfor="password"> password </label>
                <input value={pass} onchange={(e) => setPass(e.target.value)} type="password" placeholder="**********" id="password" name="password" />

                <button type="submit"> Login </button>
                </form>
                <button onClick={() => props.onFormSwitch('Register')}> Don't have an account. ? New Register... </button>
          
        </div>

    )

}