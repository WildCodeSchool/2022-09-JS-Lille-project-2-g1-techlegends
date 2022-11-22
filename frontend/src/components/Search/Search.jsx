import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Style from "./Style";

export default function Search(props) {
  const { searchValue, setSearchValue, user, setUser } = props;
  return (
    <Style>
      <h1>Utilisateur</h1>
      <p>
        Vous allez pouvoir enregistrer votre score, pour ce faire entrer un
        pseudo dans le champ de recherche si dessous.
      </p>
      <label htmlFor="user">
        <input
          type="text"
          placeholder="Asma"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </label>
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
        <Link to="/game">
          <button type="submit">Jouer</button>
        </Link>
      </form>
    </Style>
  );
}

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  setUser: PropTypes.string.isRequired,
};
