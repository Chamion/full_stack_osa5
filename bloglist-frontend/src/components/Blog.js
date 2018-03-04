import React from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

class Blog extends React.Component {
    static propTypes = {
        blog: PropTypes.object.isRequired,
        likeCallback: PropTypes.func.isRequired,
        removeCallback: PropTypes.func.isRequired,
        showRemove: PropTypes.bool.isRequired
    }
    
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
        this.removeStyle = {}
        if(!props.showRemove) {
            this.removeStyle.display = 'none'
        }
        this.state = {
            likes: props.blog.likes,
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
    
    likeHandler = async (event) => {
        const newBlog = {
            title: this.props.blog.title,
            author: this.props.blog.author,
            url: this.props.blog.url,
            likes: this.state.likes + 1,
            user: this.props.blog.user._id
        }
        await blogService.update(newBlog, this.props.blog._id)
        this.setState({
            likes: this.state.likes + 1
        })
        this.props.likeCallback()
    }
    
    render() {
        var userPart
        if(this.props.blog.user) {
            userPart = (
                <div>
                    <span>blogin lisäsi {this.props.blog.user.username}</span>
                </div>
            )
        } else {
            userPart = (
                <div></div>
            )
        }
        return (
            <div style={this.blogStyle}>
                <div onClick={this.clickHandler.bind(this)} style={this.titleStyle}>
                    <span>{this.props.blog.title} {this.props.blog.author}</span>
                </div>
                <div style={this.state.dropdownStyle}>
                    <span>{this.props.blog.url}</span>
                    <br />
                    <span>{this.state.likes} tykkäystä <button onClick={this.likeHandler.bind(this)}>tykkää</button></span>
                    {userPart}
                    <div style={this.removeStyle}>
                        <button onClick={this.props.removeCallback}>poista</button>
                    </div>
                </div>
            </div>  
        )
    }
}
export default Blog