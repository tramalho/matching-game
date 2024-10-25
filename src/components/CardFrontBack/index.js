import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
    const classElement = "-active";
    const $origin = event.target
    const $cardFrontBack = $origin.closest(".card-front-back");

    if($cardFrontBack.classList.contains(classElement)){
      $cardFrontBack.classList.remove(classElement);    
    } else {
      $cardFrontBack.classList.add(classElement);
    }
    console.log($cardFrontBack);
  }

  return /*html*/ `
  <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
    <div class="card -front">
        ${CardGame()}      
    </div>
    <div class="card -back">
        ${CardGame("js", "Logo do Javascript")}
    </div>
    </article>
  `;
}

export default CardFrontBack;
