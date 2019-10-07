import React, { Component } from 'react'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { getCats, createCat } from './api'
import './Routes.css'

//Routes
import CreateProfile from './CreateProfile'
import Landing from './Landing'
import MyProfile from './MyProfile'
import PendingRequests from './PendingRequests'
import Profiles from './Profiles'
import RequestDate from './RequestDate'
import UpdateProfile from './UpdateProfile'


export default class Routes extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: []
    }
  }
  
  componentWillMount = () => {
    getCats()
    .then(APIcats => {
      this.setState({ cats: APIcats })
    })
  }
  
  handleNewCat = newCatInfo => {
    const { cats } = this.state
    createCat(newCatInfo)
    .then(successCat => {
      console.log(`Success! New Cat: ${successCat}`)
    })
  }
  
  // componentWillUpdate = (nextProps, nextState) => {
  //   if (nextState.open === true && this.state.open === false) {
  //     this.state.onWillOpen()
  //   }
  // }
  
  render(){
    const { cats } = this.state
    return (
      <div>
        <Navbar id="navbar" bg="blue" expand="lg">
          <Navbar.Brand id="title" href="/">Paw Pals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#createprofile">Create Profile</Nav.Link>
              <Nav.Link href="#profiles">All Cats</Nav.Link>
              <Nav.Link href="#">Pending Requests</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path='/' component={ Landing } />
          <Route path='/createprofile' render={(props) => <CreateProfile handleNewCat={ this.handleNewCat } /> } />
          <Route path='/profiles' render={(props) => <Profiles
            cats={ cats }
            componentWillMount={ this.componentWillMount }
            /> }
          />
          <Route path='/updateprofile/:id' component={ UpdateProfile } />
          <Route path='/requestdate' component={ RequestDate } />
          <Route path='/pendingrequests' component={ PendingRequests } />
        </Switch>
      </div>
    )
  }
}