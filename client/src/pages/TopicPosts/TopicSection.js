import React from "react";
import Moment from "react-moment";
import { Card } from 'react-bootstrap';

const TopicSection = ({
  auth,
  post,
  addLikeToTopicPage,
  removeLikeFromPost,
}) => {
  return (
    <div>
      <Card border="secondary" style={{ width: '18rem' }}>
        <div className="topic-date">
          <Moment format="HH:mm YYYY-MM-DD">{post.date}</Moment>
        </div>
        <Card.Img variant="bottom" src={post.avatar} className="topic-avatar" alt="" />

        <Card.Body>
          <Card.Title>{post.userName}</Card.Title>
          <Card.Text>{post.textOfThePost}</Card.Text>
        </Card.Body>

        <div className="like-item">
          <p
            className="font__p font__bold p__size hover"
            onClick={() => {
              if (post.likes.find((like) => like.user === auth.user._id)) {
                post.likes.find((like) =>
                  removeLikeFromPost(post._id, like._id)
                );
              } else {
                addLikeToTopicPage(post._id);
              }
            }}
          >
            <i
              className={
                post.likes.find((like) => like.user === auth.user._id)
                  ? "fas fa-thumbs-up"
                  : "far fa-thumbs-up"
              }
            ></i>
            {post.likes.length}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TopicSection;
