import React from 'react'

const LogoutForm = (props) => {
    return (
        <div>
            <span>
                Logged in as {props.username} 
            </span>
            <form onSubmit={props.logoutHandler}>
                <input type='submit' value='logout' />
            </form>
        </div>
    )
}

export default LogoutForm