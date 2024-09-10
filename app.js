let btn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");

let playerO = true;
// let msg = document.querySelector(".msgbox")
msg.style.visibility = "hidden";
let draw = false;

let arr = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
    } else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

let disbtn = () => {
  for (let box of btn) {
    box.disabled = true;
  }
};

let enabtn = () => {
  for (let box of btn) {
    msg.style.visibility = "hidden";
    playerO = true;
    box.innerText = "";
    box.disabled = false;
  }
};

let showWinner = (winner) => {
  msg.innerText = `${winner} is winner`;
  msg.style.visibility = "visible";
  console.log(` ${winner} is winner`);
  disbtn();
};

let checkwinner = () => {
  for (let pattern of arr) {
    let val1 = btn[pattern[0]].innerText;
    let val2 = btn[pattern[1]].innerText;
    let val3 = btn[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
      }
    }
  }
};

resetbtn.addEventListener("click", enabtn); //for reset the game
