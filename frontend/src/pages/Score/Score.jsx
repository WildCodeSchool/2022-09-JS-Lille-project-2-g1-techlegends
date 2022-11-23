import Table from "@components/Table/Table";
import ScoreStyle from "./style";

export default function Score() {
  return (
    <ScoreStyle>
      <Table />
      <section className="footer" />
    </ScoreStyle>
  );
}
