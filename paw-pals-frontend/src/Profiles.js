import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import './Profiles.css'
import UpdateProfile from './UpdateProfile'


export default class Profiles extends Component {
  
  componentWillMount = () => {
    this.props.componentWillMount()
  }
  
  render(){
    const { cats } = this.props
    const allCats = () => {
      return cats.map(cat=>{
        return (
          <div>
            <Card id="card">
              <h3>{cat.name}</h3>
              <h4>{cat.age}</h4>
              <p>{cat.bio}</p>
              <UpdateProfile cat={cat} />
              <br/>
              <Button variant='primary' type='submit'>
                Request a Play Date
              </Button>
            </Card>
            <br/>
          </div>
        )
      })
    }
    return (
      <div>
        <h2>All Cats</h2>
        {allCats()}
      </div>
    )
  }
}