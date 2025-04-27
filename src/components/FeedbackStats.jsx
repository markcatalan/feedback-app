import React from "react";
import { useContext } from "react";
import FeedbackContext from "./context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const getAverage = () => {
    const sum = feedback.reduce((total, item) => total + item.rating, 0);

    return (sum / feedback.length).toFixed(1).replace(/[.,]0$/, "");
  };

  const average = getAverage();

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
