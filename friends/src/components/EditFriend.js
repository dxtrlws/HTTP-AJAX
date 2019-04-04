import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }
  //  Handler to capture the text input and assign it to state
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        // Find find friend where id in params matches the id from database
        const friend = res.data.find(
          friend => friend.id === parseInt(this.props.match.params.id)
        );
        // Set state with new friend object
        this.setState({
          name: friend.name,
          age: friend.age,
          email: friend.email
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Submit form handler
  submitFriend = event => {
    event.preventDefault();
    // Build new friend object from state
    const friend = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    };
    // Make post request to server with new friend object
    axios
      .put(
        `http://localhost:5000/friends/${this.props.match.params.id}`,
        friend
      )
      .then(res => {
        // Pass the response backup to update parent state
        this.props.updateFriends(res.data);
        // Direct user to homepage
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Form onSubmit={this.submitFriend}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default EditFriend;
