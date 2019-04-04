import React from "react";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input} from "reactstrap";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: "",
      submited: false
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitFriend = event => {
    event.preventDefault();
    const friend = {
      name: this.state.name,
      age: parseInt(this.state.age),
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.props.updateFriends(res.data);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    //    if(this.state.submited === true) return <Redirect to="/" />
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

export default AddFriend;