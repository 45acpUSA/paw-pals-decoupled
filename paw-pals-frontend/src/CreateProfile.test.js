import React from 'react'
import ReactDOM from 'react-dom'
import CreateProfile from './CreateProfile'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

// it('should have an input field for name, age and bio', () => {
//     const createprofile = mount(<CreateProfile />)
//     expect(createprofile.find('Form.Label#nameInput').text()).toEqual('Name')
//     expect(createprofile.find('Form.Label#ageInput').text()).toEqual('Age')
//     expect(createprofile.find('Form.Label#bioInput').text()).toEqual('Bio')
// })