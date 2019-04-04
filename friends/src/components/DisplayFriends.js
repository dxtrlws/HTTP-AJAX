import React from "react";
import Profile from "./Profile";
import { Row, Col } from "reactstrap";

function DisplayFriends(props) {
    console.log(props)
  return (
    <Row>
      {props.friends.map(friend => (
        <Profile
          friend={friend}
          key={friend.id}
          updateFriends={props.updateFriends}
        />
      ))}
    </Row>
  );
}

export default DisplayFriends;
