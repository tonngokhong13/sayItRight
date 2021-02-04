
for (var i = 0; i < document.querySelectorAll("button").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", clickToSay);

}

function clickToSay() {
  var logoClicked = this.innerHTML;
  sayIt(logoClicked);
}


var button = new Audio();

function stopOldPlayNew(sounds) {

  button.pause();
  button.currentTime = 0;
  button = new Audio(sounds);
  button.play();

}

function sayIt(name) {

  switch (name) {

    case "Mercedes":

      stopOldPlayNew('sounds/mercedes.mp3')

      break;

    case "Givenchy":

      stopOldPlayNew('sounds/givenchy.mp3')

      break;

    case "Chevrolet":

      stopOldPlayNew('sounds/chevy.mp3')

      break;

    case "Louis Vuitton":

      stopOldPlayNew('sounds/LV.mp3')

      break;

    case "Adidas":

      stopOldPlayNew('sounds/adidas.mp3')

      break;

    case "Cartier":

      stopOldPlayNew('sounds/cartier.mp3')

      break;

    case "Nike":

      stopOldPlayNew('sounds/nike.mp3')

      break;

      case "Nutella":

        stopOldPlayNew('sounds/nutella.mp3')

        break;
    default:
  }
}
