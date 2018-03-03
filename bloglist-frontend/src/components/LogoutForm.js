import React from 'react'

const LogoutForm = (props) => {
    const formStyle = {
        'display': 'inline',
        'marginLeft': '5px'
    }
    return (
        <div>
            <span>
                Olet kirjautunut käyttäjänä {props.username} 
            </span>
            <form onSubmit={props.logoutHandler} style={formStyle}>
                <input type='submit' value='kirjaudu ulos' />
            </form>
        </div>
    )
}

export default LogoutForm