import PropTypes from "prop-types";

export default function AllPlayerScore({ scoreData }) {
  return (
    <li>
      <span className="key">♫</span>
      {scoreData.name} : <span className="pts">{scoreData.score}</span> pts
    </li>
  );
}

AllPlayerScore.propTypes = {
  scoreData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};
