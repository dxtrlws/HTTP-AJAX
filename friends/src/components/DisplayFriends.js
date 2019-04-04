import React from "react";
import Profile from "./Profile";
import { Row } from "reactstrap";

function DisplayFriends(props) {
  return (
    <Row>
      {props.friends.map(friend => (
        <Profile
          friend={friend}
          key={friend.id}
          updateFriends={props.updateFriends}
          history={props.history}
          location={props.location}
          params={props.params}
        />
      ))}
    </Row>
  );
}

export default DisplayFriends;
