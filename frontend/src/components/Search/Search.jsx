import { useState } from "react";
import Style from "./Style";

export default function Search() {
  const [query, setQuery] = useState("Official Music Video");
  const changeQuery = (e) => {
    e.preventDefault();
  };

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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <button type="submit" onClick={changeQuery}>
          Jouer
        </button>
      </form>
    </Style>
  );
}
