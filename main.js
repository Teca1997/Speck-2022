const formWrapper = document.getElementById("formWrapper");

formWrapper.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = document.getElementById("subject").value;

  if(!inputValue) {
    alert("please enter a value")
    return
  }

  const cardsWrapper = document.getElementById("cardsWrapper");

  const newElement = document.createElement("div");
  newElement.className = "card";
  newElement.innerText = inputValue;

  cardsWrapper.appendChild(newElement);
});

function removeItems() {
  const cards = document.getElementById("cardsWrapper");

  if(!cards.firstChild) alert("no elements")

  while (cards.firstChild) {
    cards.firstChild.remove();
  }
}
