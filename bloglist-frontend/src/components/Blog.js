import React from 'react'
class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.blogStyle = {
            paddingTop: 10,
            paddingLeft: 2,
            border: 'solid',
            borderWidth: 1,
            marginBottom: 5,
            minHeight: 20
        }
        this.titleStyle = {
            width: '100%',
            cursor: 'pointer'
        }
        this.state = {
            dropdownStyle: {
                display: 'none'
            }
        }
    }
    
    clickHandler(event) {
        if(this.state.dropdownStyle.display === 'none') {
            this.setState({
                dropdownStyle: {
                    display: 'block'
                }
            })
        } else {
            this.setState({
                dropdownStyle: {
                    display: 'none'
                }
            })
        }
    }
    
    render() {
        return (
            <div style={this.blogStyle}>
                <div onClick={this.clickHandler.bind(this)} style={this.titleStyle}>
                    <span>{this.props.blog.title} {this.props.blog.author}</span>
                </div>
                <div style={this.state.dropdownStyle}>
                    <span>{this.props.blog.url}</span>
                    <br />
                    <span>{this.props.blog.likes} tykkäystä <button>tykkää</button></span>
                    <br />
                    <span>blogin lisäsi {this.props.blog.user.username}</span>
                </div>
            </div>  
        )
    }
}
export default Blog