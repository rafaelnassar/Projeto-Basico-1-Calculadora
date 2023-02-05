var reset = true;
function zero() {
  if (reset) {
    document.getElementById("output").value = "0";
    reset = false;
  } else {
    document.getElementById("output").value += "0";
  }
}
function one() {
  if (reset) {
    document.getElementById("output").value = "1";
    reset = false;
  } else {
    document.getElementById("output").value += "1";
  }
}
function two() {
  if (reset) {
    document.getElementById("output").value = "2";
    reset = false;
  } else {
    document.getElementById("output").value += "2";
  }
}
function three() {
  if (reset) {
    document.getElementById("output").value = "3";
    reset = false;
  } else {
    document.getElementById("output").value += "3";
  }
}
function four() {
  if (reset) {
    document.getElementById("output").value = "4";
    reset = false;
  } else {
    document.getElementById("output").value += "4";
  }
}
function five() {
  if (reset) {
    document.getElementById("output").value = "5";
    reset = false;
  } else {
    document.getElementById("output").value += "5";
  }
}
function six() {
  if (reset) {
    document.getElementById("output").value = "6";
    reset = false;
  } else {
    document.getElementById("output").value += "6";
  }
}
function seven() {
  if (reset) {
    document.getElementById("output").value = "7";
    reset = false;
  } else {
    document.getElementById("output").value += "7";
  }
}
function eight() {
  if (reset) {
    document.getElementById("output").value = "8";
    reset = false;
  } else {
    document.getElementById("output").value += "8";
  }
}
function nine() {
  if (reset) {
    document.getElementById("output").value = "9";
    reset = false;
  } else {
    document.getElementById("output").value += "9";
  }
}
function decimal() {
  if (reset) {
    document.getElementById("output").value = ".";
    reset = false;
  } else {
    document.getElementById("output").value += ".";
  }
}
function AC() {
  document.getElementById("output").value = "0";
  reset = true;
}
function plusMinus() {
  document.getElementById("output").value =
    -document.getElementById("output").value;
  reset = true;
}
function percent() {
  document.getElementById("output").value =
    document.getElementById("output").value / 100;
  reset = true;
}
function add() {
  document.getElementById("output").value += "+";
  reset = false;
}
function subtract() {
  document.getElementById("output").value += "-";
  reset = false;
}
function multiply() {
  document.getElementById("output").value += "*"; //"\xD7";
  reset = false;
}
function divide() {
  document.getElementById("output").value += "/"; //"\xF7";
  reset = false;
}
function equals() {
  var result = eval(document.getElementById("output").value);
  document.getElementById("output").value = result;
  reset = true;
}
