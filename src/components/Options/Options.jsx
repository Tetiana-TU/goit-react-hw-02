import PropTypes from 'prop-types';
import css from "./Options.module.css"
const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={css.btnOptions}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

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
  updateFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};
export default Options;