/** @format */

var btn = Array.from(document.getElementsByClassName("btn"));
var input = document.getElementById("input");
var sign = ["-", "+", "x", "/", "%", "power", "root"];
var del = document.getElementById("del");
var op = Array.from(document.getElementsByClassName("op"));
var firstNum = "";
var secondNum = "";
var operation = "";
var equation = "";
var flag = false;
console.log(btn, input, flag);
console.log(btn.innerText);
console.log(flag);
console.log(op);
//divide
function divide(x, y) {
  return (input.innerText = x / y);
}

//multiply
function multiply(x, y) {
  return (input.innerText = x * y);
}

//modulus
function modulus(x, y) {
  return (input.innerText = x % y);
}

//negative
function negative(x, y) {
  return (input.innerText = x - y);
}

//positive
function positive(x, y) {
  return (input.innerText = x + y);
}

//squareRoot
function squareRoot(x) {
  return (input.innerText = Math.sqrt(x));
}

//power
function power(x, y) {
  return (input.innerText = Math.pow(x, y));
}
//delete
del.addEventListener("click", function () {
  window.location.reload();
});

function addnum(num) {
  num.addEventListener("click", function (e) {
 
    if (!input.innerText) {
      flag = true;
    }
    if (input.innerText) {
      flag = false;
    }
    if (flag == true && num.innerText === "-") {
      input.innerText = num.innerText;
      console.log(flag);
    }
    if (flag == true && num.innerText <= 9) {
      input.innerText = num.innerText;
      console.log(flag);
    }
    if (flag == false) {
      input.innerText += num.innerText;
    }

    for (i = 0; i < sign.length; i++) {
      if (input.innerText && num.innerText == sign[i]) {
        operation = sign[i];
        //disaple other operationss
        op.map(function (eachOp) {
          eachOp.style.pointerEvents= 'none';
        });
      }
    }

    if (num.innerText == "=") {
      var equationTrim = input.innerText.substring(
        0,
        input.innerText.length - 1
      );
      equation = equationTrim.split(operation);
    }
    firstNum = equation[0];
    secondNum = equation[1];
    console.log(firstNum, secondNum);
    //negative operation
    if (operation === "-" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      negative(firstNum, secondNum);
    }
    //positive operation
    if (operation === "+" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      positive(firstNum, secondNum);
    }
    //divide operation
    if (operation === "/" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      divide(firstNum, secondNum);
    }
    //multiply operation
    if (operation === "x" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      multiply(firstNum, secondNum);
    }
    //modulus operation
    if (operation === "%" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      modulus(firstNum, secondNum);
    }
    //Power operation
    if (operation === "power" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      power(firstNum, secondNum);
    }
    //squareroot operation
    if (operation === "root" && firstNum && secondNum) {
      console.log(operation, firstNum, secondNum);
      root(firstNum);
    }
  });
}

btn.map(addnum);
