import React from 'react'

const Statistiikka = (props) => {
    const state = props.store.getState()
    const summa = state.good + state.ok + state.bad
    if (summa > 0) {
        return (
            <div>
                <h2>statistiikka</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>hyvä</td>
                            <td>{state.good}</td>
                        </tr>
                        <tr>
                            <td>neutraali</td>
                            <td>{state.ok}</td>
                        </tr>
                        <tr>
                            <td>huono</td>
                            <td>{state.bad}</td>
                        </tr>
                        <tr>
                            <td>keskiarvo</td>
                            <td>{
                                (state.good - 
                                state.bad)
                                / summa
                            }</td>
                        </tr>
                        <tr>
                            <td>positiivisia</td>
                            <td>{state.good / summa}</td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={() => props.store.dispatch({type: 'ZERO'})}>nollaa tilasto</button>
            </div >
        )
    }
    return (
        <div>
            <h2>statistiikka</h2>
            <div>ei yhtään palautetta annettu</div>
        </div>
    )
}

export default Statistiikka