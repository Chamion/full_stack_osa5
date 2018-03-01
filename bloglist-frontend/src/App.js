import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import LogoutForm from './components/LogoutForm'
import blogService from './services/blogs'
import loginService from './services/login'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: [],
            username: '',
            password: '',
            error: null,
            user: null
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
            console.log(user)
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
        this.setState({
            user: null
        })
    }
    
    handleFieldChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if(this.state.user === null) {
            return (
                <div>
                    <LoginForm loginHandler={this.handleLogin.bind(this)} 
                    passwordChangeHandler={this.handleFieldChange.bind(this)} 
                    usernameChangeHandler={this.handleFieldChange.bind(this)} 
                    usernameValue={this.state.username} 
                    passwordValue={this.state.password} 
                    />
                </div>
            )
        }
        return (
            <div>
                <LogoutForm username={this.state.user.username} logoutHandler={this.handleLogout.bind(this)}/>
                <h2>blogs</h2>
                <table>
                    <tbody>
                        {this.state.blogs.map(blog => 
                            <Blog key={blog._id} blog={blog}/>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
