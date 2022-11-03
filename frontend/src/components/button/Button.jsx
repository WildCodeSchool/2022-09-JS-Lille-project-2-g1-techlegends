import ButtonStyle from "./style";

export default function Button(valueOne, valueTwo, valueThree, valueFour) {
  return (
    <ButtonStyle className="response">
      <div className="right">
        <button type="button">{valueOne}</button>
        <button type="button">{valueThree}</button>
      </div>
      <div className="left">
        <button type="button">{valueTwo}</button>
        <button type="button">{valueFour}</button>
      </div>
    </ButtonStyle>
  );
}
