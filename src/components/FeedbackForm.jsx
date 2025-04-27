import React, { useEffect } from "react";
import { useState, useContext } from "react";
import Card from "./common/Card";
import Button from "./common/Button";
import RatingSelect from "./RatingSelect";

import FeedbackContext from "./context/FeedbackContext";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (e.target.value !== "" && e.target.value.length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters.");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters.");

      return;
    }

    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit === true) {
      console.log("updating feedback item.");
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      console.log("Adding new feedback item.");
      addFeedback(newFeedback);
    }
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you like to rate our service?</h2>

        <RatingSelect selectedRating={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            value={text}
            placeholder="Write your feedback"
            type="text"
          />
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
