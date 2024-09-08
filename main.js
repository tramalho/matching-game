import "./src/components/styles/settings/colors.css";
import "./src/components/styles/generic/reset.css";
import "./src/components/styles/elements/base.css";

import BoardGame from "./src/Objects/BoardGame";


// boa pratica usar $ para variaveis que guardam elementos do DOM
const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(4);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);

console.log($htmlBoardGame);
