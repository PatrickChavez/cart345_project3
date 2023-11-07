// Adding sound variables
// The main pages
let bubblePageMusic = new Audio("assets/sounds/tam-z03.mp3");
bubblePageMusic.loop = true;
bubblePageMusic.volume = 0.3;
let leavesPageMusic = new Audio("assets/sounds/akiurara.mp3");
leavesPageMusic.loop = true;
leavesPageMusic.volume = 0.3;
let snowPageMusic = new Audio("assets/sounds/tam-x04.mp3");
snowPageMusic.loop = true;
snowPageMusic.volume = 0.3;
// The sound effects
let spinSFX = new Audio("assets/sounds/xylophone1.mp3");
spinSFX.volume = 0.5;
let growSFX = new Audio("assets/sounds/get1.wav");
growSFX.volume = 0.3;
let shrinkSFX = new Audio("assets/sounds/cancel1.wav");
shrinkSFX.volume = 0.4;
let blurSFX = new Audio("assets/sounds/piko1.wav");
blurSFX.volume = 0.5;
let opacitySFX = new Audio("assets/sounds/sparkle21.mp3");
opacitySFX.volume = 0.3;
// The music buttons
let playMusicButton = document.getElementById("playMusicButton");
let stopMusicButton = document.getElementById("stopMusicButton");

// The textify buttons
let textButtonBubbles = document.getElementById("textButtonBubbles");
let textButtonLeaves = document.getElementById("textButtonLeaves");
let textButtonSnow = document.getElementById("textButtonSnow");

// Adding variable for the body
// An array is used in order to select the first class of the body
let pageBody = document.querySelector("body").classList[0];
// Adding variables for rainbow text
let rainbowArray = [
  "blueText",
  "greenText",
  "yellowText",
  "redText",
  "purpleText",
];

// Showing the text
let textDisplay = document.querySelectorAll(".random-letter");
let textContainer = document.querySelector(".textContainer");

// Music functions
// Play the appropriate music when the music button is clicked
function playMusic() {
  if (pageBody === "bubblesBody") {
    console.log("click!");
    bubblePageMusic.play();
    // The music will always start at the beginning
    bubblePageMusic.currentTime = 0;
  } else if (pageBody === "leavesBody") {
    leavesPageMusic.play();
    // The music will always start at the beginning
    leavesPageMusic.currentTime = 0;
  } else if (pageBody === "snowBody") {
    snowPageMusic.play();
    // The music will always start at the beginning
    snowPageMusic.currentTime = 0;
  }
}

// Stops the music when the button is clicked
function stopMusic() {
  bubblePageMusic.pause();
  leavesPageMusic.pause();
  snowPageMusic.pause();
}

// Code from Tara Jensen
// https://codepen.io/TLJens/pen/XdYOjr
function stringGen(len) {
  let text = " ";
  //   Character string from csharptest.net
  //   https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  let charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}
// Code from Jacob Relkin/jakanz
// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
// let randomTextColor = Math.floor(Math.random() * rainbowArray.length);

let updateTextColor = window.setInterval(function () {
  // rainbowArray[randomTextColor];
  let randomTextColor = Math.floor(Math.random() * rainbowArray.length);

  // Using a for loop for multiple elements to have random text
  // References:
  // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
  // https://stackoverflow.com/questions/55012836/why-does-queryselector-only-select-the-first-element-and-how-can-i-fix-this
  for (let i = 0; i < textDisplay.length; i++) {
    textDisplay[i].innerText = stringGen(1);

    // Adding rainbow text on hover
    // References:
    // https://stackoverflow.com/questions/70837599/hover-animation-makes-initial-animation-rerun-after-mouse-out
    // https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur
    textDisplay[i].addEventListener("mouseover", function () {
      textDisplay[i].classList.toggle(rainbowArray[randomTextColor]);
    });
  }
}, 1000);

// Letter transform functions
function letterTransform(event) {
  let key = event.key;
  // For loop to select all letters
  for (let i = 0; i < textDisplay.length; i++) {
    // Blur
    if (key === "ArrowDown") {
      blurSFX.play();
      textDisplay[i].classList.toggle("blurry");
    }
    // Enlarge
    else if (key === "ArrowUp") {
      if (textDisplay[i].style.transform !== "scale(3)") {
        growSFX.play();
        textDisplay[i].style.transform = "scale(3)";
        console.log("Working Scale!");
      } else {
        shrinkSFX.play();
        textDisplay[i].style.transform = "scale(1)";
        console.log("Working Scale Again!");
      }
      console.log("Working!");
    }
    // Opacity
    else if (key === "ArrowLeft") {
      opacitySFX.play();
      textDisplay[i].classList.toggle("textOpacity");
    }
    // Rotate
    else if (key === "ArrowRight") {
      if (textDisplay[i].style.transform !== "rotate(180deg)") {
        spinSFX.play();
        textDisplay[i].style.transform = "rotate(180deg)";
        console.log("Working Spin!");
      } else {
        spinSFX.play();
        textDisplay[i].style.transform = "rotate(360deg)";
        console.log("Working Spin Again!");
      }
    }
  }
}

function letterDivTransform(keyEvent) {
  // if (document.body === ".leavesBody" || ".snowBody") {}
  let key = keyEvent.key;
  // Blur
  if (key === "ArrowDown") {
    textContainer.classList.toggle("blurry");
  }
  // Enlarge
  else if (key === "ArrowUp") {
    if (textContainer.style.transform !== "scale(3)") {
      textContainer.style.transform = "scale(3)";
      console.log("Working Scale!");
    } else {
      textContainer.style.transform = "scale(1)";
      console.log("Working Scale Again!");
    }
    console.log("Working!");
  }
  // Opacity
  else if (key === "ArrowLeft") {
    textContainer.classList.toggle("textOpacity");
  }
  // Rotate
  else if (key === "ArrowRight") {
    if (textContainer.style.transform !== "rotate(180deg)") {
      spinSFX.play();
      textContainer.style.transform = "rotate(180deg)";
      console.log("Working Spin!");
    } else {
      spinSFX.play();
      textContainer.style.transform = "rotate(360deg)";
      console.log("Working Spin Again!");
    }
  }
}

// Textify buttons functions
function changeBubblesBG() {
  document.body.classList.toggle("bubblesBodyPixel");
  opacitySFX.play();
}

function changeLeavesBG() {
  document.body.classList.toggle("leavesBodyPixel");
  opacitySFX.play();
}

function changeSnowBG() {
  document.body.classList.toggle("snowBodyPixel");
  opacitySFX.play();
}

// Calling the functions
document.addEventListener("keydown", letterTransform);
document.addEventListener("keydown", letterDivTransform);
playMusicButton.addEventListener("click", playMusic);
stopMusicButton.addEventListener("click", stopMusic);
// Textify button event listeners
if (pageBody === "bubblesBody") {
  textButtonBubbles.addEventListener("click", changeBubblesBG);
} else if (pageBody === "leavesBody") {
  textButtonLeaves.addEventListener("click", changeLeavesBG);
} else if (pageBody === "snowBody") {
  textButtonSnow.addEventListener("click", changeSnowBG);
}

console.log(pageBody.classList);
