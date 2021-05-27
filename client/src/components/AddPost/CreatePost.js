import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';


const CreatePost = ({ createPost }) => {
  let [textOfThePost, setTextOfThePost] = useState("");

  const onChange = (e) => setTextOfThePost(e.target.value);

  const submitData = () => {
    if (textOfThePost !== "" && textOfThePost !== null) {
      createPost(textOfThePost);
    } else {
      alert("Text is empty!");
    }
    setTextOfThePost("");
  };
  return (
    <div className="tips-wrapper">
      <p className="font__p p__size font__bold app_color_font">
        <i className="fas fa-check-circle small_margin_right"></i>
        Tips on getting good answers quickly
      </p>
      <br />

      <ul className="tips">
        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Make sure your question hasn't been asked already
          </p>
        </li>

        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Keep your question short and to the point
          </p>
        </li>

        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Double-check grammar and spelling
          </p>
        </li>

        <li className="tip-item">
          <p className="font__p">
            <i className="fas fa-check small_margin_right"></i>
            Start Your question with "What","How","Why",etc.
          </p>
        </li>
      </ul>

      <form>
        {/* <textarea
          type="text"
          value={textOfThePost}
          onChange={(e) => onChange(e)}
        /> */}

      </form>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} value={textOfThePost}
            onChange={(e) => onChange(e)} />
        </Form.Group>
        <div
          onClick={() => submitData()}
        >
          <Button variant="primary">Add post</Button>
        </div>
      </Form>
    </div>
  );
};

export default CreatePost;
