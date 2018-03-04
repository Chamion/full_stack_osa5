import React from 'react'
import Statistiikka from './components/Statistiikka'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = props.store.getState()
        props.store.subscribe(() => {
            this.setState(props.store.getState())
        })
    }
    
    klik = (nappi) => () => {
        this.props.store.dispatch({type: nappi})
    }

    render() {
        return (
            <div>
                <h2>anna palautetta</h2>
                <button onClick={this.klik('GOOD')}>hyvä</button>
                <button onClick={this.klik('OK')}>neutraali</button>
                <button onClick={this.klik('BAD')}>huono</button>
                <Statistiikka store={this.props.store} />
            </div>
        )
    }
}

export default App
