import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';


const TopicPageForm = ({ auth, createComment, post }) => {
  let [textOfTheComment, setTextOfTheComment] = useState("");

  const onChange = (e) => setTextOfTheComment(e.target.value);
  return (
    <form
      className="search-topic-wrapper"
      style={{ display: auth.isLoggedIn ? "block" : "none" }}
    >
      <p
        className="app_color_font font__bold font__p topics-headline"
        style={{ textAlign: "center" }}
      >
        Create Post
      </p>

      <Form>
        <Form.Group className="mb-6" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} value={textOfTheComment}
            onChange={(e) => onChange(e)} />
        </Form.Group>
      </Form>

      <Button variant="primary"
        onClick={() => {
          createComment(textOfTheComment, post._id);
          setTextOfTheComment("");
        }}>Add comment</Button>
    </form>
  );
};

export default TopicPageForm;
