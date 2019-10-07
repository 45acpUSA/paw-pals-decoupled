import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './Profile'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// it('should have an input field for name, age and bio', () => {
//     const createprofile = mount(<CreateProfile />)
//     expect(createprofile.find('#name').text()).toEqual('Name')
//     expect(createprofile.find('#age').text()).toEqual('Age')
//     expect(createprofile.find('#bio').text()).toEqual('Bio')
// })