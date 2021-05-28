import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removePost } from "../../actions/postsActions/postsActions/removePost";
import Spinner from "../../Spinner";
import Moment from "react-moment";
import { Card, Button } from 'react-bootstrap';

const UserPost = ({ post, removePost, auth }) => {
  return post === null || !post ? (
    <div className="all-page-wrapper flex__center">
      <Spinner />
    </div>
  ) : (
    <div className="user-post">
      <Card>
        <div className="user-post-date">
          <Moment format="HH:mm YYYY-MM-DD">{post.date}</Moment>
        </div>
        <Card.Body>
          <Card.Title>{post.textOfThePost}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
        </Card.Body>
      </Card>

      <div className="post__likes__comments__deleteBtn-wrapper">
        <div className="post__likes__comments__deleteBtn">
          <div className="user-post-likes">
            <i className="far fa-thumbs-up"></i> {post.likes.length}
          </div>
          <div className="user-post-comments">
            <i className="far fa-comment"></i>
            {post.comments.length}
          </div>

          <div
            style={{
              display: post.user === auth.user._id ? "block" : "none",
            }}
          >
            <div
              onClick={() => removePost(post._id)}
            >
              <i className="fas fa-times"></i>
            </div>
          </div>

          <Link to={`/topics/topic/${post._id}`}><Button variant="primary">View More</Button></Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  removePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPost);
