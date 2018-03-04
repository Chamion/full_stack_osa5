import React from 'react'
import Statistiikka from './components/Statistiikka'

class App extends React.Component {
    klik = (nappi) => () => {
        
    }

    render() {
        return (
            <div>
                <h2>anna palautetta</h2>
                <button onClick={this.klik('GOOD')}>hyvä</button>
                <button onClick={this.klik('OK')}>neutraali</button>
                <button onClick={this.klik('BAD')}>huono</button>
                <Statistiikka />
            </div>
        )
    }
}

export default App
