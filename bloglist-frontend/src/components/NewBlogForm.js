import React from 'react'
import PropTypes from 'prop-types'

class NewBlogForm extends React.Component {
    static propTypes = {
        newBlogHandler: PropTypes.func.isRequired,
        fieldChangeHandler: PropTypes.func.isRequired,
        titleValue: PropTypes.string,
        authorValue: PropTypes.string,
        urlValue: PropTypes.string,
        show: PropTypes.bool
    }
    
    constructor(props) {
        super(props)
        if(!props.show) {
            this.state = {
                buttonLabel: 'uusi blogi',
                style: {
                    display: 'none'
                }
            }
        } else {
            this.state = {
                buttonLabel: 'piilota',
                style: {
                    display: 'block'
                }
            }
        }
    }
    
    toggle(event) {
        if(this.state.style.display === 'none') {
            this.setState({
                buttonLabel: 'piilota',
                style: {
                    display: 'block'
                }
            })
        } else {
            this.setState({
                buttonLabel: 'uusi blogi',
                style: {
                    display: 'none'
                }
            })
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.toggle.bind(this)}>{this.state.buttonLabel}</button>
                <div style={this.state.style}>
                    <form onSubmit={this.props.newBlogHandler}>
                        title: <input type='text' name='title' onChange={this.props.fieldChangeHandler} value={this.props.titleValue} />
                        <br />
                        author: <input type='text' name='author' onChange={this.props.fieldChangeHandler} value={this.props.authorValue} />
                        <br />
                        url: <input type='text' name='url' onChange={this.props.fieldChangeHandler} value={this.props.urlValue} />
                        <br />
                        <input type='submit' value='lisää' />
                    </form>
                </div>
            </div>
        )
    }
}

export default NewBlogForm