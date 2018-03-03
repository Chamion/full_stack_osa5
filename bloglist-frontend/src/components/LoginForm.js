import React from 'react'

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.loginHandler}>
                <span>käyttäjänimi: <input type='text' name='username' onChange={props.usernameChangeHandler} /></span>
                <br />
                <span>salasana: <input type='password' name='password' onChange={props.passwordChangeHandler} /></span>
                <br />
                <input type='submit' value='kirjaudu sisään' />
            </form>
        </div>
    )
}

export default LoginForm