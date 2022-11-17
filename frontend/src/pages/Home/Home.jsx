import logo from "@assets/Logo.png";
import { Link } from "react-router-dom";
import HomeStyle from "./style";

export default function Home() {
  return (
    <HomeStyle>
      <img src={logo} alt="Logo Tech Legend" />
      <h2>
        Régles <span>du Jeu</span>
      </h2>
      <p>
        Bienvenue dans le blind test proposé par les <span>Tech Legend</span> .
        Mais qu'est ce qu'un blind test me dirais vous?
      </p>
      <div className="rightLeft">
        <p className="left">
          C'est assez simple il s'agit d'un jeu dans lequel nous allons vous
          diffuser de la musique et votre objectif est de retrouver le titre de
          cette musique.
        </p>
        <p className="right">
          Pour ce faire, un serie de 10 musique vous seron proposée de maniére
          automatique, ainsi que que quatre réponses. A vous de trouver la bonne
          réponse avant la fin des 30 seconde impartie. Chaque bonne réponse
          vous fera gagné X points.
        </p>
      </div>
      <p className="launchgame">
        <Link to="/game">LANCER LE JEU!</Link>
      </p>
    </HomeStyle>
  );
}
