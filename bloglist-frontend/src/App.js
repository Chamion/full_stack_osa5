import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import NewBlogForm from './components/NewBlogForm'
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
            error: null,
            user,
            title: '',
            author: '',
            url: ''
        }
    }

    componentDidMount() {
        blogService.getAll().then(blogs =>
            this.setState({ blogs })
        )
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
        } catch(err) {
            this.setState({
                error: 'käyttäjätunnus tai salasana virheellinen',
            })
            setTimeout(() => {
                this.setState({ error: null })
            }, 5000)
        }
    }
    
    handleLogout = (event) => {
        event.preventDefault()
        localStorage.removeItem('user')
        this.setState({
            user: null
        })
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
        } catch(err) {
            this.setState({
                error: err.message,
            })
            setTimeout(() => {
                this.setState({ error: null })
            }, 5000)
        }
    }
    
    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if(this.state.user) {
            return (
                <div>
                    <LogoutForm username={this.state.user.username} logoutHandler={this.handleLogout.bind(this)}/>
                    <NewBlogForm newBlogHandler={this.handleNewBlog.bind(this)} 
                    fieldChangeHandler={this.handleFieldChange.bind(this)} 
                    />
                    <h2>blogs</h2>
                    <table>
                        <tbody>
                            {this.state.blogs.map(blog => 
                                <Blog key={blog._id} blog={blog}/>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div>
                    <LoginForm loginHandler={this.handleLogin.bind(this)} 
                    passwordChangeHandler={this.handleFieldChange.bind(this)} 
                    usernameChangeHandler={this.handleFieldChange.bind(this)} 
                    />
                </div>
            )
        }
    }
}

export default App;
