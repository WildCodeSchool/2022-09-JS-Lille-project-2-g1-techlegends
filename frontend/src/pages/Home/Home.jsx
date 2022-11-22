import logo from "@assets/Logo.png";
import { Link } from "react-router-dom";

import RulesStyle from "./style";

export default function Home() {

  return (
    <RulesStyle>
      <div className="all">
        <section className="logo">
          <img src={logo} alt="Logo Tech Legend" />

          <div className="content">
            <div className="leaves">
              <div className="leaf1">♫</div>
              <div className="leaf2">♫</div>
              <div className="leaf3">♫</div>
              <div className="leaf4">♫</div>
              <div className="leaf6">♫</div>
              <div className="leaf7">♫</div>
              <div className="leaf8">♫</div>
              <div className="leaf9">♫</div>
              <div className="leaf10">♫</div>
              <div className="leaf11">♫</div>
            </div>
          </div>
        </section>

        <section className="texte">
          <h2>
            Règles <span>du Jeu</span>
          </h2>

          <p>
            Bienvenue dans le blind test proposé par{" "}
            <span>
              <a href="https://github.com/WildCodeSchool/2022-09-JS-Lille-project-2-g1-techlegends">
                Tech Legend.{" "}
              </a>{" "}
            </span>
          </p>
          <p>Mais qu'est ce qu'un blind test me direz vous ?</p>
          <p>
            C'est assez simple il s'agit d'un jeu dans lequel nous allons vous
            diffuser de la musique et votre objectif est de retrouver le titre.
            Une série de musiques vous sera proposée, ainsi que quatre réponses.
          </p>
          <p>
            Chaque bonne réponse vous fera gagné 100 points, une mauvaise vous
            fera perdre 20 points !
          </p>
          <p>
            A vous de jouer ! Vous disposez de 1 min 30 sec, sinon votre
            ordinateur explosera 💥 !
          </p>
        </section>
      </div>
      <section className="footer" />
    </RulesStyle>

  );
}
