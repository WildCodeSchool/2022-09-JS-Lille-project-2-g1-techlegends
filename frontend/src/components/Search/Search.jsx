import PropTypes from "prop-types";
import Style from "./Style";

export default function Search(props) {
  const { searchValue, setSearchValue } = props;
  return (
    <Style>
      <h1>Recherche</h1>
      <p>
        Lancer le jeu via une recherche vous permettant de jouer avec un style
        de musqiue ou un artiste en particulier. Si toute fois vous ne souhaitez
        pas spécialment un artiste ou un style, vous pouvez valider le
        formulaire vide.
      </p>
      <form>
        <label htmlFor="search">
          Votre Recherche:
          <input
            type="search"
            placeholder="Artiste, Style,..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>
        <button type="submit">Jouer</button>
      </form>
    </Style>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
};
