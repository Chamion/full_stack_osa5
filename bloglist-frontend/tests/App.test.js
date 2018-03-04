import React from 'react'
import { mount } from 'enzyme'
import App from '../src/App'
import LoginForm from '../src/components/LoginForm'
jest.mock('../src/services/blogs')
import blogService from '../src/services/blogs'

describe('<App />', () => {
    var app
    
    beforeAll(() => {
        app = mount(<App />)
    })
    
    describe('Before logging in', () => {
        it('renders login form', () => {
            const loginForm = app.find(LoginForm)
            expect(loginForm.length).not.toBe(0)
        })
        
        it('does not render blogs', () => {
            blogService.blogs.forEach(blog => {
                expect(app.text()).not.toContain(blog.title)
            })
        })
    })
    
    describe('After logging in', () => {
        beforeAll(() => {
            localStorage.setItem('user', JSON.stringify({
                username: 'test',
                name: 'Testaaja',
                token: 'deadbeef123456789'
            }))
            app = mount(<App />)
        })
        
        it('renders blogs', () => {
            blogService.blogs.forEach(blog => {
                expect(app.text()).toContain(blog.title)
            })
        })
    })
})