import React, { useState } from "react";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [BMI, setBMI] = useState("");

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    if (
      isNaN(weightValue) ||
      isNaN(heightValue) ||
      !(weightValue >= 0 && weightValue < 300) ||
      !(heightValue >= 0.1 && heightValue < 3)
    ) {
      alert("Please enter a valid value");
      return;
    }

    const bmi = bmiCalculate(weightValue, heightValue);
    setBMI(`Your BMI is ${bmi.toFixed(1)}`);
    setWeight("");
    setHeight("");
  };
  function bmiCalculate(weight, height) {
    const bmi = weight / Math.pow(height, 2);
    return bmi;
  }

  return (
    <div>
      <input
        type="number"
        name="weight"
        placeholder="Enter Weight in Kg"
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="number"
        name="height"
        placeholder="Enter height in m"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      <p id="result">{BMI} </p>
    </div>
  );
}

export default BMICalculator;
