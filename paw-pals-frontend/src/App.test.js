import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

// it('displays title', () => {
//     const app = mount(<App />)
//     expect(app.find('h1').text()).toEqual('Paw Pals')
// })