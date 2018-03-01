import React from 'react'

const Notification = (props) => {
    const outStyle = {
        'padding': '5px',
        'margin': '5px',
        'backgroundColor': props.colour
    }
    const inStyle = {
        'margin': '5px',
        'backgroundColor': 'white'
    }
    if(props.notification === null) {
        outStyle['display'] = 'none'
    }
    return (
        <div style={outStyle}>
            <p style={inStyle}>
                {props.notification}
            </p>
        </div>
    )
}

export default Notification