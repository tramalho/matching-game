import "./src/components/styles/settings/colors.css";
import "./src/components/styles/generic/reset.css";
import "./src/components/styles/elements/base.css";

import BoardGame from "./src/Objects/BoardGame";
import ScoreBoard from "./src/Objects/ScoreBoard";

// boa pratica usar $ para variaveis que guardam elementos do DOM
const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend", 
`
  ${ScoreBoard()}
  ${BoardGame(6)}
`
);
