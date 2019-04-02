import React, { Component } from 'react';
import axios from 'axios'

import DisplayFriends from './components/DisplayFriends'

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }
  componentDidMount = () => {
    axios.get('http://localhost:5000/friends')
    .then((res)=> {
      console.log(res)
      this.setState({friends: res.data})
    })
    .catch((err) => {
      console.log(err)
    })
  }
  
  render() {
    return (
      <div>
        {this.state.friends.map(friend => <DisplayFriends friend={friend} />)}
      </div>
    );
  }
}

export default App;
