import React, { useState } from "react";

export const Register = (props) => {

    const { email, setEmail } = useState('');
    const { pass, setPass } = useState('');
    const { name, setName } = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (

        <div className="auth-form-container">

        <h2> Register </h2>

            <form className="link" onSubmit={handleSubmit} >

                <label  htmlFor="name"> FullName </label>
                <input  value={name} onChange={ (e) => setName ( e.target.value ) } type="name" placeholder="Enter your name" id="name" name="name" />

                <label htmlFor="email"> Email </label>
                <input value={email} onChange={ (e) => setEmail ( e.target.value ) } type="email" placeholder="youremail@gmail.com" id="email" name="email" />

                <label htmlFor="password"> password </label>
                <input value={pass} onChange={ (e) => setPass ( e.target.value ) } type="password" placeholder="**********" id="password" name="password" />


                <label htmlFor="password"> Confirm password </label>
                <input value={pass} onChange={ (e) => setPass ( e.target.value ) } type="password" placeholder="**********" id="password" name="password" />


                </form>

            <button className="btn" onClick={ () => props.onFormSwitch ('login') } > Already have an account.!  Login  </button>
           
            </div>

    )

} 