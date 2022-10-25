let numberDisplay = document.querySelector("#number-display");
let numberButtons = document.querySelectorAll("button");
let prevNum = null;
let currentNum = null;
let currentOp = (prevNum, currentNum) => {
  return currentNum;
};

InitButtons();

function InitButtons() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      HandleInput(button.id);
    });
  });
}

function HandleInput(button) {
  if (button == "=" && currentOp != null) {
    currentNum = operate(prevNum, currentNum, currentOp);
    numberDisplay.innerHTML = currentNum;
    prevNum = null;
    return;
  }

  if (numberDisplay.innerHTML == 0) numberDisplay.innerHTML = "";

  if (isNumeric(button) || button == ".") {
    numberDisplay.innerHTML += button;
    currentNum = parseFloat(numberDisplay.innerHTML);
    return;
  }


  switch (button) {
    case "+":
      currentOp = (prevNum, currentNum) => {
        return prevNum + currentNum;
      };
      break;
    case "-":
      currentOp = (prevNum, currentNum) => {
        return prevNum - currentNum;
      };
      break;
    case "/":
      currentOp = (prevNum, currentNum) => {
        return prevNum / currentNum;
      };
      break;
    case "*":
      currentOp = (prevNum, currentNum) => {
        return prevNum * currentNum;
      };
      break;
  }

  prevNum = currentNum;
  currentNum = null;
  numberDisplay.innerHTML = "0";
}

function operate(prevNum, currentNum, op) {
  return op(prevNum, currentNum);
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
