import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
    static propTypes = {
        notification: PropTypes.string,
        colour: PropTypes.string.isRequired
    }
    
    constructor(props) {
        super(props)
        this.inStyle = {
            margin: 5,
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: 'white',
            borderRadius: 10
        }
    }
    
    render() {
        const outStyle = {
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            margin: 5,
            backgroundColor: this.props.colour,
            borderRadius: 20
        }
        if(this.props.notification === null) {
            outStyle.display = 'none'
        }
        return (
            <div style={outStyle}>
                <p style={this.inStyle}>
                    {this.props.notification}
                </p>
            </div>
        )
    }
}

export default Notification