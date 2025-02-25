const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={() => {
          localStorage.removeItem("feedback");
          window.location.reload(); // Перезавантажуємо сторінку після скидання
        }}>Reset</button>
      )}
    </div>
  );
};
export default Options;