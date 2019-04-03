import React from 'react'
import Profile from './Profile'
import {  Row, Col } from "reactstrap";

function DisplayFriends(props) {
    return (
        <Row>
            {props.friends.map(friend => <Profile friend={friend} key={friend.id}/>)}
        </Row>
    )
}

export default DisplayFriends