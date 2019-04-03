import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";


import DisplayFriends from "./components/DisplayFriends";
import AddFriend from "./components/AddFriend";
import './components/styles.css'
import { Container, Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addFriend = friend => {
    console.log(friend);
    
  };

  render() {
    return (
      <Container>
        <Navbar color="light" className="spacing">
          <NavbarBrand>Friends</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink to="/add">Add Friend</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Route
          path="/"
          exact
          render={props => (
            <DisplayFriends
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
            />
          )}
        />
        <Route
          path="/add"
          render={props => <AddFriend {...props} addFriend={this.addFriend} />}
        
        />
      </Container>
    );
  }
}

export default App;
