import logo from "@assets/Logo.png";
import RulesStyle from "./style";

export default function Rules() {
  return (
    <RulesStyle>
      <div className="all">
        <section className="logo">
          <img src={logo} alt="Logo Tech Legend" />
        </section>

        <section className="texte">
          <h2>
            Régles <span>du Jeu</span>
          </h2>

          <p>
            Bienvenue dans le blind test proposé par les<span>Tech Legend</span>
            .
          </p>
          <p>Mais qu'est ce qu'un blind test me direz vous ?</p>
          <p>
            C'est assez simple il s'agit d'un jeu dans lequel nous allons vous
            diffuser de la musique et votre objectif est de retrouver le titre.
            Une série de 10 musiques vous sera proposée, ainsi que quatre
            réponses.
          </p>
          <p>
            Chaque bonne réponse vous fera gagné 100 points, une mauvaise vous
            fera perdre 20 points !
          </p>
          <p>
            A vous de jouer ! Vous disposez de 1 min 30 sec, sinon votre machine
            explosera 💥 !
          </p>
        </section>
      </div>
    </RulesStyle>
  );
}
