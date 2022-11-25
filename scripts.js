let isCalculated= 0;
let isOpable = false;
let canDecimal = true;
let numbers = document.querySelectorAll(".numbers");
let input = document.getElementById("input");
let equals = document.getElementById("equals");
let clear = document.getElementById("clear");
let del = document.getElementById("del");
let operators = document.querySelectorAll(".operators");
let decimal = document.getElementById("decimal");
window.onload = () => {
  input.value = "";
};

numbers.forEach((numButton) => {
  numButton.addEventListener("click", () => {
    if (isCalculated == 1) {
    input.value = "";
     isCalculated = 0;
    }
    input.value += numButton.value;
    isOpable = true;
  });
});

operators.forEach((opButton) => {
    opButton.addEventListener("click", () => {
      
      switch(opButton.value){
        case "*": 
        case "/":
        case "%":
        case "+":
            if(isOpable){
                input.value += opButton.value;
                canDecimal = true; 
            }
            break;
        case "-":
        if(input.value.charAt(input.value.length-1)=="-"){
                return;
            }
            input.value += opButton.value;
            canDecimal = true; 
            break;
      }
      isCalculated=0;
      isOpable = false;
    });
  });
decimal.addEventListener("click", () => {
    if (isCalculated == 1) {
        input.value = "0";
        isCalculated = 0;
    }
    if(canDecimal){
        if(!isOpable || input.value ==""){
            input.value += 0;
        }
       
        input.value += decimal.value;
        canDecimal = false; 
    }
});

equals.addEventListener("click", () => {
  isCalculated = 1;
  canDecimal = true;
  try {
    let answer = eval(input.value);
    if (Number.isInteger(answer)) {
      input.value = answer;
    } else {
      input.value = answer.toFixed(2);
    }
  } catch{
    input.value = "Syntax Err"
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  isOpable = true;
  canDecimal = true;
});

del.addEventListener("click", () => {
if(input.value.charAt(input.value.length-1)=="."){
      canDecimal = true;
  }
  if(['*','/', '+', '%'] .includes(input.value.charAt(input.value.length-1)).toString()){
      isOpable =true;
  }
  
  input.value = input.value.substr(0, input.value.length - 1);
  
  
});
