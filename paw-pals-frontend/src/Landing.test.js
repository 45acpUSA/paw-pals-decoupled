import React from 'react'
import ReactDOM from 'react-dom'
import Landing from './Landing'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('should display an introduction message', () => {
    const landing = mount(<Landing />)
    expect(landing.find('#intro').text()).toMatch(/\w/i)
})