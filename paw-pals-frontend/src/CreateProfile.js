import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ActiveStorageProvider from 'react-activestorage-provider'


export default class CreateProfile extends Component {
  constructor(props){
      super(props)
      this.state = {
          form: {
              name: '',
              age: '',
              bio: '',
              avatar: ''
          },
          success: false,
      }
  }
  
  handleChange = event => {
      const { form } = this.state
      form[event.target.name] = event.target.value
      this.setState({ form: form })
  }
  
  handleNewCat = () => {
      const { success } = this.state
      const { handleNewCat } = this.props
      handleNewCat(this.state.form)
      let redirect = success === false ? true : false
      this.setState({ success: redirect })
  }
  
//   componentDidUpdate = (prevProps, prevState) => {
//     const { cats } = this.props
//     if (cats !== prevProps.cats) {
//       this.setState({ cats: cats })
//     }
//   }
  
  
  
  
  render(){
    const { name, age, bio } = this.state.form
    return (
      <div>
        <br/>
        <br/>
        <Form>
            <Form.Group controlId='nameInput'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type='text'
                    name='name'
                    onChange={this.handleChange}
                    value={name}
                    placeholder="Your Cat's Name"
                />
            </Form.Group>
            
            <Form.Group controlId='ageInput'>
                <Form.Label>Age</Form.Label>
                <Form.Control
                    type='number'
                    name='age'
                    min='0'
                    onChange={this.handleChange}
                    value={age}
                    placeholder="Your Cat's Age"
                />
            </Form.Group>
            
            <Form.Group controlId='bioInput'>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as='textarea'
                    rows='3'
                    type='text'
                    name='bio'
                    onChange={this.handleChange}
                    value={bio}
                    placeholder="Please enter a short list of what your cat enjoys..."
                />
            </Form.Group>
            
            <Button onClick={this.handleNewCat} variant='primary' type='submit'>
                Create Profile
            </Button>
        </Form>
        {this.state.success && <Redirect to='/profiles' />}
      </div>
    )
  }
}