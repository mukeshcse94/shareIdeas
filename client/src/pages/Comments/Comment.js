import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { removeLikeFromComment } from "../../actions/postsActions/likesActions/removeLikeFromComment";
import { addLikeToComment } from "../../actions/postsActions/likesActions/addLikeToComment";
import Spinner from "../../Spinner";
import { Card } from 'react-bootstrap';


const Comment = ({
  comment,
  auth,
  post,
  removeLikeFromComment,
  addLikeToComment,
}) => {
  return post === null || post === [] ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div key={comment._id}>
      <div className="topic-date">
        <Moment format="HH:mm YYYY-MM-DD">{comment.date}</Moment>
      </div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={comment.avatar} className="topic-avatar" alt="" />
        <Card.Body>
          <Card.Title>{comment.userName}</Card.Title>
          <Card.Text>{comment.textOfTheComment}</Card.Text>
        </Card.Body>

        <div
          className="like-section"
          style={{ color: "rgb(42, 9, 9)" }}
          onClick={() => {
            if (comment.likes.find((like) => like.user === auth.user._id)) {
              comment.likes.find((like) =>
                removeLikeFromComment(post._id, comment._id, like._id)
              );
            } else {
              addLikeToComment(post._id, comment._id);
            }
          }}
        >
          <div className="font__p font__bold p__size like-item">
            <i
              className={
                comment.likes.find((like) => like.user === auth.user._id)
                  ? "fas fa-thumbs-up"
                  : "far fa-thumbs-up"
              }
            ></i>
          </div>

          <div className="font__p font__bold p__size likes-length-item">
            <p>{comment.likes.length}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  post: state.posts.post,
});

const mapDispatchToProps = {
  removeLikeFromComment,
  addLikeToComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
