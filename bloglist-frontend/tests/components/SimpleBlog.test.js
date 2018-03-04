import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from '../../src/components/SimpleBlog'

describe('SimpleBlog', () => {
    it('renders title, author and likes', () => {
        const blog = {
            title: 'Test Title',
            author: 'Test Author',
            likes: 1
        }

        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        
        const headerDiv = simpleBlogComponent.find('.header')
        expect(headerDiv.text()).toContain(blog.title)
        expect(headerDiv.text()).toContain(blog.author)
        
        const likesDiv = simpleBlogComponent.find('.likes')
        expect(likesDiv.text()).toContain(blog.likes)
    })
    
    it('calls onClick when like-button is clicked', () => {
        const blog = {
            title: 'Test Title',
            author: 'Test Author',
            likes: 0
        }
        
        const onClickFunction = () => {
            blog.likes += 1
        }

        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} onClick={onClickFunction} />)
        const button = simpleBlogComponent.find('button')
        button.simulate('click')
        expect(blog.likes).toBe(1)
        button.simulate('click')
        expect(blog.likes).toBe(2)
    })
})
