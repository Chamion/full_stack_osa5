import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    static propTypes = {
        loginHandler: PropTypes.func.isRequired,
        fieldChangeHandler: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.loginHandler}>
                    <span>käyttäjänimi: <input type='text' name='username' onChange={this.props.fieldChangeHandler} /></span>
                    <br />
                    <span>salasana: <input type='password' name='password' onChange={this.props.fieldChangeHandler} /></span>
                    <br />
                    <input type='submit' value='kirjaudu sisään' />
                </form>
            </div>
        )
    }
}

export default LoginForm