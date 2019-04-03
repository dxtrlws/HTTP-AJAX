import React from "react";

import { Col, Card, CardText, CardBody, Button, CardFooter } from "reactstrap";

function Profile({ friend }) {
  return (
    <Col xs="4">
      <Card className="spacing">
        <CardBody>
          <CardText>{friend.name}</CardText>
          <CardText>{friend.age}</CardText>
          <CardText>{friend.email}</CardText>
        </CardBody>
        <CardFooter>
          <Button>Remove</Button>
        </CardFooter>
      </Card>
    </Col>
  );
}

export default Profile;
