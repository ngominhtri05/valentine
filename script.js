function NoClick() {
  const button = document.getElementById("yesbutton");
  const sizeIncrease = 30;
  const maximumSize = 5000; // Pixels
  const currentSize = parseInt(button.style.fontSize) || 16;
  const newSize = Math.min(currentSize + sizeIncrease, maximumSize);
  button.style.fontSize = newSize + "px";
  changeText()
}
const phrases = [
  "No, choose again",
  "Are you sure?",
  "pick me pls",
  "think clearly",
  "Is that your final answer??",
  "im very handsome ",
  "im gonna cry",
];
var currentTextIndex = 0;
function changeText() {
  var button = document.getElementById("nobutton");
  button.innerHTML = phrases[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % phrases.length;
}
function YesClick() {
  var buttonsContainer = document.querySelector("div > div");
  buttonsContainer.innerHTML = "";
  var elementsToRemove = document.getElementsByClassName("text");
  while (elementsToRemove.length > 0) {
    elementsToRemove[0].parentNode.removeChild(elementsToRemove[0]);
  }
  var container = document.querySelector("div");
  container.insertAdjacentHTML(
    "beforeend",
    "<p style='font-size: 50px;  border: 5px'>YAYYYYYYYYYYYY!!!!!!!!!!</p>"
  );
}
