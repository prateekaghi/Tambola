// let dice = [];
let n = 90;
// let diceRoll = "";
// const newNumber = function () {
//   diceRoll = Math.trunc(Math.random() * 100 + 1);
//   if (!dice.includes(diceRoll)) {
//     dice.push(diceRoll);
//     console.log(dice);
//     n--;
//     document.getElementById("currentNumber").textContent = diceRoll;
//     const cellEl = (document.getElementById(
//       `cell${diceRoll}`
//     ).style.backgroundColor = "green");
//   } else {
//     if (!n == 0) {
//       newNumber();
//     } else {
//       // document.getElementById("currentNumber").textContent = "OVER";
//       console.log("game over");
//     }
//   }
// };
// const newEl = document.getElementById("button1");
// newEl.addEventListener("click", newNumber);

// const restartEl = document.getElementById("restart");
// restartEl.addEventListener("click", function () {
//   for (let i = 1; i < 101; i++) {
//     document.getElementById(`cell${i}`).style.backgroundColor = "yellow";
//   }
//   document.getElementById("currentNumber").textContent = "?";
//   n = 100;
//   dice = [];
// });

const dice1 = [];
numbers = function () {
  for (let i = 0; i < 90; i++) {
    dice1.push(i);
    dice1[i] = 0;
  }
};
numbers();
diceRoll1 = "";
const newNumber1 = function () {
  diceRoll1 = Math.trunc(Math.random() * 90 + 1);
  if (dice1[diceRoll1 - 1] === 0) {
    dice1[diceRoll1 - 1] = diceRoll1;
    let msg = new SpeechSynthesisUtterance();
    msg.text = `next number is ${diceRoll1}`;
    window.speechSynthesis.speak(msg);
    n--;
    document.getElementById("currentNumber").textContent = diceRoll1;
    const cellEl = (document.getElementById(
      `cell${diceRoll1}`
    ).style.backgroundColor = "green");
  } else {
    if (!n === 0) {
      newNumber1();
    } else {
      document.getElementById("currentNumber").textContent = "OVER";
      console.log("game over");
    }
  }
};
//new number button//
const newEl = document.getElementById("button1");
newEl.addEventListener("click", newNumber1);

//restart game button
const restartEl = document.getElementById("restart");
restartEl.addEventListener("click", function () {
  for (let i = 1; i < 91; i++) {
    document.getElementById(`cell${i}`).style.backgroundColor = "yellow";
  }
  document.getElementById("currentNumber").textContent = "?";
  n = 90;
  numbers();
});
