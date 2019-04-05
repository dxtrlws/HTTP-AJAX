import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";

import DisplayFriends from "./components/DisplayFriends";
import NavBar from "./components/NavBar";
import AddFriend from "./components/AddFriend";
import EditFriend from "./components/EditFriend";
import "./components/styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  // Mounts and sets initial state from server
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

  // Update state from CRUD operations
  updateFriends = friend => {
    this.setState({ friends: friend });
  };

  render() {
    return (
      <div className="container">
        <NavBar />
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
      </div>
    );
  }
}

export default App;
