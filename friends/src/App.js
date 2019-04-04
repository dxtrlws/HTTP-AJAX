import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import AddFriend from "./components/AddFriend";
import EditFriend from "./components/EditFriend";
import "./components/styles.css";
import { Container, Navbar, Nav, NavItem } from "reactstrap";

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

  updateFriends = friend => {
    this.setState({ friends: friend });
    
  };

  render() {
    return (
      <Container>
        <Navbar color="light" className="spacing">
          <NavLink to="/">Friends</NavLink>
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
              updateFriends={this.updateFriends}
            />
          )}
        />
        <Route
          path="/add"
          render={props => (
            <AddFriend {...props} updateFriends={this.updateFriends} />
          )}
        />
        <Route
          path="/edit/:id"
          render={props => (
            <EditFriend
              {...props}
              updateFriends={this.updateFriends}
              friends={this.state.friends}
            />
          )}
        />
      </Container>
    );
  }
}

export default App;
