import PropTypes from "prop-types";

export default function AllPlayerScore({ scoreData }) {
  return (
    <ul>
      <li>
        <span className="key">♫</span>
        {scoreData.name} : <span className="pts">{scoreData.score}</span>
      </li>
    </ul>
  );
}

AllPlayerScore.propTypes = {
  scoreData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};
