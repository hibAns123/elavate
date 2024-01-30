var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{
    
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
  // Check if inputs are valid numbers
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid values for weight and height.");
    return;
}
    var BMI = weight/(height*height); 
    // Display result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range";
    }else{
        statement.innerText = "Your BMI falls within the obese range";
    }
});