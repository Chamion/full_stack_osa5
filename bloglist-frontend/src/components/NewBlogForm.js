import React from 'react'

const NewBlogForm = (props) => {
    const style = {}
    var buttonLabel
    if(props.collapse) {
        style['display'] = 'none'
        buttonLabel = 'uusi blogi'
    } else {
        buttonLabel = 'piilota'
    }
    return (
        <div>
            <button onClick={props.toggleHandler}>{buttonLabel}</button>
            <div style={style}>
                <form onSubmit={props.newBlogHandler}>
                    title: <input type='text' name='title' onChange={props.fieldChangeHandler} value={props.titleValue} />
                    <br />
                    author: <input type='text' name='author' onChange={props.fieldChangeHandler} value={props.authorValue} />
                    <br />
                    url: <input type='text' name='url' onChange={props.fieldChangeHandler} value={props.urlValue} />
                    <br />
                    <input type='submit' value='send' />
                </form>
            </div>
        </div>
    )
}

export default NewBlogForm