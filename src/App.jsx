import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";



const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  
  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const newFeedback = { ...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1 };
      localStorage.setItem("feedback", JSON.stringify(newFeedback)); // Збереження в локальному сховищі
      return newFeedback;
    });
  };

 
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <div className="App">
      <Description/>
      
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
};





export default App;