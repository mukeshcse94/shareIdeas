import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';

const User = ({ user }) => {
  return (
    <div>
      <Card style={{ width: '25rem' }}>
        <div className="topic-user">
          <Card.Img variant="top" src={user.avatar} className="topic-avatar" alt="" />
        </div>
        <Card.Body>
          <Card.Title><p className="font__p p__size">{user.userName}</p></Card.Title>
        </Card.Body>

        <Card.Body>
          <Card.Link href="#"><Link to={`/users/user/${user._id}`}>View Profile</Link></Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
