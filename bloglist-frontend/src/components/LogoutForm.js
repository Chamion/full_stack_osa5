import React from 'react'
import PropTypes from 'prop-types'

class LogoutForm extends React.Component {
    static propTypes = {
        username: PropTypes.string.isRequired,
        logoutHandler: PropTypes.func.isRequired
    }
    
    constructor(props) {
        super(props)
        this.formStyle = {
            'display': 'inline',
            'marginLeft': '5px'
        }
    }
    
    render() {
        return (
            <div>
                <span>
                    Olet kirjautunut käyttäjänä {this.props.username} 
                </span>
                <form onSubmit={this.props.logoutHandler} style={this.formStyle}>
                    <input type='submit' value='kirjaudu ulos' />
                </form>
            </div>
        )
    }
}

export default LogoutForm