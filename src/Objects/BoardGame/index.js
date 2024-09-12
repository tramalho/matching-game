import CardFrontBack from "../../components/CardFrontBack";
import "./style.css";

function BoardGame(amountCards) {
    const $htmlCardGame = CardFrontBack();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

  return  /*html*/`
    <section class="board-game">
        ${$htmlContent}
    </section>
    `;
}

export default BoardGame;