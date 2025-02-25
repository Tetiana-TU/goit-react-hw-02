import PropTypes from 'prop-types';
import css from "./Options.module.css"
const Options = ({ onLeaveFeedback, totalFeedback }) => {
  return (
    <div className={css.btnOptions}>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {totalFeedback > 0 && (
        <button onClick={() => {
          localStorage.removeItem("feedback");
          window.location.reload(); 
        }}>Reset</button>
      )}
    </div>
  );
};
Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
export default Options;