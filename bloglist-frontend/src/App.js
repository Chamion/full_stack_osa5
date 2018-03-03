import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import NewBlogForm from './components/NewBlogForm'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
    constructor(props) {
        super(props)
        var user
        try {
            user = JSON.parse(localStorage.getItem('user'))
        } catch(err) {
            user = null
        }
        this.state = {
            blogs: [],
            username: '',
            password: '',
            notification: null,
            notificationColour: 'red',
            user,
            title: '',
            author: '',
            url: '',
            collapseNewBlog: true
        }
    }

    componentDidMount = async () => {
        const blogs = await blogService.getAll()
        this.setState({ blogs })
        this.sortBlogs()
    }
    
    handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username: this.state.username,
                password: this.state.password
            })
            this.setState({
                username: '',
                password: '',
                user
            })
            localStorage.setItem('user', JSON.stringify(user))
            this.showNotification('Sisäänkirjautuminen onnistui', 'green')
        } catch(err) {
            this.showNotification('käyttäjätunnus tai salasana virheellinen', 'red')
        }
    }
    
    handleLogout(event) {
        event.preventDefault()
        localStorage.removeItem('user')
        this.setState({
            user: null
        })
        this.showNotification('Uloskirjautuminen onnistui', 'green')
    }
    
    handleNewBlog = async (event) => {
        event.preventDefault()
        try {
            const newBlog = await blogService.addNew({
                title: this.state.title,
                author: this.state.author,
                url: this.state.url
            }, this.state.user)
            this.setState({
                blogs: this.state.blogs.concat([newBlog]),
                title: '',
                author: '',
                url: ''
            })
            this.showNotification('Blogi "' + newBlog.title + '" lisätty', 'green')
        } catch(err) {
            this.showNotification(err.message, 'red')
        }
    }
    
    handleFieldChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    showNotification(notification, colour) {
        this.setState({
            notification,
            notificationColour: colour
        })
        setTimeout(() => {
            this.hideNotification(notification)
        }, 5000)
    }
    
    hideNotification(notification) {
        if(this.state.notification === notification) {
            this.setState({
                notification: null
            })
        }
    }
    
    toggleBoolean(param) {
        return () => {
            this.setState({
                [param]: !this.state[param]
            })
        }
    }
    
    blogLikeHandler(id) {
        return () => {
            const blogs = this.state.blogs.slice(0)
            blogs.forEach(blog => {
                if(blog._id === id) {
                    blog.likes += 1
                }
            })
            this.setState({
                blogs
            })
            this.sortBlogs()
        }
    }
    
    sortBlogs = () => {
        const blogs = this.state.blogs.slice(0)
        blogs.sort((a, b) => {
            return b.likes - a.likes
        })
        this.setState({
            blogs
        })
    }

    render() {
        var body
        if(this.state.user) {
            body = (
                <div>
                    <LogoutForm username={this.state.user.username} logoutHandler={this.handleLogout.bind(this)}/>
                    <NewBlogForm newBlogHandler={this.handleNewBlog.bind(this)} 
                    fieldChangeHandler={this.handleFieldChange.bind(this)} 
                    titleValue={this.state.title} 
                    authorValue={this.state.author} 
                    urlValue={this.state.url} 
                    collapse={this.state.collapseNewBlog} 
                    toggleHandler={this.toggleBoolean('collapseNewBlog')}
                    />
                    <h2>blogs</h2>
                    <div>
                        {
                            this.state.blogs.map(blog => 
                                <Blog key={blog._id} blog={blog} likeCallback={this.blogLikeHandler(blog._id).bind(this)}/>
                            )
                        }
                    </div>
                </div>
            )
        } else {
            body = (
                <div>
                    <LoginForm loginHandler={this.handleLogin.bind(this)} 
                    passwordChangeHandler={this.handleFieldChange.bind(this)} 
                    usernameChangeHandler={this.handleFieldChange.bind(this)} 
                    />
                </div>
            )
        }
        return (
            <div>
                <Notification notification={this.state.notification} colour={this.state.notificationColour} />
                {body}
            </div>
        )
    }
}

export default App;
