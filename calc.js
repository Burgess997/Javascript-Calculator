let numberDisplay = document.querySelector("#number-display");
let numberButtons = document.querySelectorAll("button");
let prevNum = null;
let currentNum = null;
let afterOp = false;

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

function clear() {
  currentNum = 0;
  prevNum = 0;
  numberDisplay.innerHTML = "0"
  currentOp = (prevNum, currentNum) => {
    return currentNum;
  };
}

function HandleInput(button) {
    if (button == "clear"){
        clear
    }

  if (button == "eq" && currentOp != null) {
    currentNum = operate(prevNum, currentNum, currentOp);
    currentOp = (prevNum, currentNum) => {
      return currentNum;
    };
    numberDisplay.innerHTML = currentNum;
    prevNum = null;
    afterOp = true
    return;
  }

  if (numberDisplay.innerHTML == 0) numberDisplay.innerHTML = "";

  if (isNumeric(button) || button == ".") {
    if (afterOp){
        clear()
        numberDisplay.innerHTML = ""
    }
    numberDisplay.innerHTML += button;
    currentNum = parseFloat(numberDisplay.innerHTML);
    return;
  }

  if (prevNum != null) {
    currentNum = operate(prevNum, currentNum, currentOp);
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

  afterOp = false
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
