import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // const [feedback, setFeedback] = useState([
  //   { id: 1, text: "This is feedback item 1", rating: 5 },
  //   { id: 2, text: "This is feedback item 2", rating: 7 },
  //   { id: 3, text: "This is feedback item 3", rating: 10 },
  // ]);
  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });

    // console.log(item);
  };

  const updateFeedback = (id, updItem) => {
    // updItem.id = id;
    // setFeedback([updItem, ...feedback]);

    // setFeedback(
    //   feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    // );

    setFeedback((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );

    // Reset feedback edit to default
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit: feedbackEdit,
        addFeedback: addFeedback,
        deleteFeedback: deleteFeedback,
        editFeedback: editFeedback,
        updateFeedback: updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
