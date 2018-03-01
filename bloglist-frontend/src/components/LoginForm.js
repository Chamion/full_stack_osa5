import React from 'react'

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.loginHandler}>
                username: <input type='text' name='username' onChange={props.usernameChangeHandler} />
                <br />
                password: <input type='password' name='password' onChange={props.passwordChangeHandler} />
                <br />
                <input type='submit' value='login' />
            </form>
        </div>
    )
}

export default LoginForm