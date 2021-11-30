const gameContainer = document.getElementById("game");

const easyCOLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];

const hardColors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "cyan",
  "cyan",
  "pink",
  "pink",
  "yellow",
  "yellow",
  "greenyellow",
  "greenyellow",
  "khaki",
  "khaki",
  "lavender",
  "lavender",
  "lightslategrey",
  "lightslategrey",
  "magenta",
  "magenta",
  "maroon",
  "maroon",
  "darkslategrey",
  "darkslategrey",
]
const resetBtn = document.querySelector("#reset")
resetBtn.addEventListener("click", function(){
  location.reload()
})
const easybtn = document.querySelector("#easy")
easybtn.addEventListener("click", function(){
  let COLORS = easyCOLORS
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

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
// you can use event.target to see which element was clicked
let choiceArr = []
let correctArr = []
let freeze = false
choiceArr.length = Math.min(choiceArr.length, 2)
function handleCardClick(event) {
  if (freeze) { return };
  console.log("you just clicked", event.target);
  event.target.style.backgroundColor = event.target.className
  let choice = event.target
  choiceArr.push(choice)
  if (choiceArr[1] === choiceArr[0]) {
    alert("Stop That!")
    choiceArr.pop()
  }
  if (choiceArr[1] !== undefined) {
    freeze = true
    console.log("Both Choices")
    if (choiceArr[0].className === choiceArr[1].className) {
      console.log("Match!")
      correctArr.push(choiceArr[0], choiceArr[1])
      choiceArr.pop()
      choiceArr.pop()
      freeze = false
      console.log(correctArr)
      console.log(correctArr.length)
      if (correctArr.length === 10) {
        alert("WINNER!")
        location.reload()
      }
    } else {
      console.log("No Match")
      setTimeout(function () {
        choiceArr[0].style.backgroundColor = ""
        choiceArr[1].style.backgroundColor = ""
        choiceArr.pop()
        choiceArr.pop()
        freeze = false
      }, 1000)
    }
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);

})
const hardbtn = document.querySelector("#hard")
hardbtn.addEventListener("click", function(){
  let COLORS = hardColors;
  alert("Good Luck!")
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

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
// you can use event.target to see which element was clicked
let choiceArr = []
let correctArr = []
let freeze = false
choiceArr.length = Math.min(choiceArr.length, 2)
function handleCardClick(event) {
  if (freeze) { return };
  console.log("you just clicked", event.target);
  event.target.style.backgroundColor = event.target.className
  let choice = event.target
  choiceArr.push(choice)
  if (choiceArr[1] === choiceArr[0]) {
    alert("Stop That!")
    choiceArr.pop()
  }
  if (choiceArr[1] !== undefined) {
    freeze = true
    console.log("Both Choices")
    if (choiceArr[0].className === choiceArr[1].className) {
      console.log("Match!")
      correctArr.push(choiceArr[0], choiceArr[1])
      choiceArr.pop()
      choiceArr.pop()
      freeze = false
      console.log(correctArr)
      console.log(correctArr.length)
      if (correctArr.length === 30) {
        alert("WINNER!")
        location.reload()
      }
    } else {
      console.log("No Match")
      setTimeout(function () {
        choiceArr[0].style.backgroundColor = ""
        choiceArr[1].style.backgroundColor = ""
        choiceArr.pop()
        choiceArr.pop()
        freeze = false
      }, 1000)
    }
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);

})

