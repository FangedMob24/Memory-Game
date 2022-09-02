const gameContainer = document.getElementById("game");
const startGame = document.getElementById("start");
const restartGame = document.getElementById("restart");
let cardCount = 0;
let firstCard =0;
let secondCard = 0;
let numId = 0;
let game = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

startGame.addEventListener('click',function(){
  game = true;
})

restartGame.addEventListener('click',function(){
  for(let i = 0; i < COLORS.length; i++){
    let card = document.getElementById(`${i}`);
    card.style.backgroundColor = 'white';
  }
  
})

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.id = numId++;
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
if(game === true){
  cardCount++;

  if(cardCount === 1){
    firstCard = event.target;
  }
  else if(cardCount === 2){
    secondCard = event.target;
  }

  setTimeout(function(){
    if(firstCard.className === secondCard.className && firstCard.id != secondCard.id){
      cardCount--;
    }
    else if(firstCard.className != secondCard || firstCard.id === secondCard.id){
      event.target.style.backgroundColor = 'white';
      cardCount--;
    }
  },3500)


  if(cardCount <= 2) {
  // you can use event.target to see which element was clicked
    let color = event.target.className;
    event.target.style.backgroundColor = `${color}`;
  }
}
  // console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */