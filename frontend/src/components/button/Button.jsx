import ButtonStyle from "./style";

export default function Button() {
  return (
    <ButtonStyle className="response">
      <div className="right">
        <button type="button">A: Réponse A</button>
        <button type="button">C: Réponse C</button>
      </div>
      <div className="left">
        <button type="button">B: Réponse B</button>
        <button type="button">D: Réponse D</button>
      </div>
    </ButtonStyle>
  );
}
