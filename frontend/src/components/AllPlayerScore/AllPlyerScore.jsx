import PropTypes from "prop-types";

export default function AllPlayerScore({ scoreData }) {
  return (
    <ul>
      <li>
        {scoreData.name}: <span>{scoreData.score}</span>pts
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
