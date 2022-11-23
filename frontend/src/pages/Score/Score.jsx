import PropTypes from "prop-types";
import Table from "@components/Table/Table";
import ScoreStyle from "./style";

export default function Score({ user, score }) {
  return (
    <ScoreStyle>
      <Table user={user} score={score} />
      <section className="footer" />
    </ScoreStyle>
  );
}

Score.propTypes = {
  user: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
