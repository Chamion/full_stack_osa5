import React from 'react'

const LogoutForm = (props) => {
    const formStyle = {
        'display': 'inline',
        'marginLeft': '5px'
    }
    return (
        <div>
            <p>
                Olet kirjautunut käyttäjänä {props.username} 
                <form onSubmit={props.logoutHandler} style={formStyle}>
                    <input type='submit' value='kirjaudu ulos' />
                </form>
            </p>
        </div>
    )
}

export default LogoutForm