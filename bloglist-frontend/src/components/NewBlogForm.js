import React from 'react'

const NewBlogForm = (props) => {
    return (
        <div>
            <form onSubmit={props.newBlogHandler}>
                title: <input type='text' name='title' onChange={props.fieldChangeHandler} />
                <br />
                author: <input type='text' name='author' onChange={props.fieldChangeHandler} />
                <br />
                url: <input type='text' name='url' onChange={props.fieldChangeHandler} />
                <br />
                <input type='submit' value='send' />
            </form>
        </div>
    )
}

export default NewBlogForm