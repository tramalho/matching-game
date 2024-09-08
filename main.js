import "./src/components/styles/settings/colors.css";
import "./src/components/styles/generic/reset.css";
import "./src/components/styles/elements/base.css";

import CardGame from "./src/components/CardGame";


// boa pratica usar $ para variaveis que guardam elementos do DOM
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();
$root.insertAdjacentHTML("beforeend", $htmlCardGame);

console.log($htmlCardGame);
