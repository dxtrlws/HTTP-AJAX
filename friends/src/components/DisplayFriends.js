import React from "react";
import Profile from "./Profile";
import Grid from '@material-ui/core/Grid'

function DisplayFriends(props) {
  return (
    <Grid container>  
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
    </Grid>
  );
}

export default DisplayFriends;
