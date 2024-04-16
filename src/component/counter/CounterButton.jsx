import { PropTypes } from "prop-types";

export default function CounterButton({
  by,
  incrementMethod,
  decrementMethod,
}) {
  return (
    <div className="Counter">
      <div>
        <button className="countButton" onClick={() => incrementMethod(by)}>
          +{by}
        </button>
        <button className="countButton" onClick={() => decrementMethod(by)}>
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 5,
};
