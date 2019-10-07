import React from 'react'
import ReactDOM from 'react-dom'
import MyProfile from './MyProfile'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

