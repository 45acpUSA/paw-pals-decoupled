import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

