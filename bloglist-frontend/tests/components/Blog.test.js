import React from 'react'
import { shallow } from 'enzyme'
import Blog from '../../src/components/Blog'

describe('Blog', () => {
    var blogComponent
    var blog
    
    beforeAll(() => {
        blog = {
            title: 'Testi Blogi',
            author: 'Testi Testaaja',
            url: 'test.test',
            likes: 0,
            user: {
                username: 'testinimi'
            }
        }
        blogComponent = shallow(<Blog blog={blog} showRemove={true} />)
    })
    
    it('renders title and author', () => {
        const nameDiv = blogComponent.find('.name')
        expect(nameDiv.text()).toContain(blog.title)
        expect(nameDiv.text()).toContain(blog.author)
    })
    
    describe('Before clicking name', () => {
        it('does not render content', () => {
            const contentDiv = blogComponent.find('.content')
            expect(contentDiv.text()).toContain(blog.url)
            expect(contentDiv.text()).toContain(blog.likes)
            expect(contentDiv.text()).toContain(blog.user.username)
            expect(contentDiv.prop('style').display).toBe('none')
        })
    })
    
    describe('After clicking name', () => {
        beforeAll(() => {
            const nameDiv = blogComponent.find('.name')
            nameDiv.simulate('click')
        })
        it('renders content', () => {
            const contentDiv = blogComponent.find('.content')
            expect(contentDiv.text()).toContain(blog.url)
            expect(contentDiv.text()).toContain(blog.likes)
            expect(contentDiv.text()).toContain(blog.user.username)
            expect(contentDiv.prop('style').display).not.toBe('none')
        })
    })
})