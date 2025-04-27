import { FaTimes, FaEdit } from "react-icons/fa";
import React, { useState, useContext, useEffect } from "react";
import Card from "./common/Card";

import FeedbackContext from "./context/FeedbackContext";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    setRating(item.rating);
    setText(item.text);
  }, [item]);

  return (
    <Card reverse={true}>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

export default FeedbackItem;
