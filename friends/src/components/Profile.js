import React from "react";
import axios from "axios";
import * as S from "./styles";

function Profile(props) {
  function removeHandler() {
    axios
      .delete(`http://localhost:5000/friends/${props.friend.id}`)
      .then(res => {
        props.updateFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <S.Card>
      <S.CardHeader>
        <S.CardProfile>
          <i className="fas fa-user-circle" />
          <h4>{props.friend.name}</h4>
        </S.CardProfile>
        <S.CardEditor>
          <i className="fas fa-pen" />
          <i onClick={removeHandler} className="fas fa-trash" />
        </S.CardEditor>
      </S.CardHeader>
      <hr />
      <S.CardText>
        <i className="fas fa-birthday-cake" /> {props.friend.age}
      </S.CardText>
      <S.CardText>
        <i className="fas fa-envelope" /> {props.friend.email}
      </S.CardText>
    </S.Card>
  );
}

export default Profile;
