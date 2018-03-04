import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newAnecdote: ''
        }
    }
    
    addNewAnecdote(event) {
        event.preventDefault()
        if(this.state.newAnecdote === '') {
            return
        }
        this.props.store.dispatch({
            type: 'ADD',
            anecdote: this.state.newAnecdote
        })
        this.setState({
            newAnecdote: ''
        })
    }
    
    handleFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        const anecdotes = this.props.store.getState()
        return (
            <div>
                <h2>Anecdotes</h2>
                {anecdotes.map(anecdote=>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content} 
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => this.props.store.dispatch({
                                type: 'VOTE',
                                id: anecdote.id
                            })}>vote</button>
                        </div>
                    </div>
                )}
                <h2>create new</h2>
                <form onSubmit={this.addNewAnecdote.bind(this)}>
                    <div><input name="newAnecdote" value={this.state.newAnecdote} onChange={this.handleFieldChange.bind(this)} /></div>
                    <button>create</button> 
                </form>
            </div>
        )
    }
}

export default App