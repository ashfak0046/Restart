const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#Height").value);
  const weight = parseInt(document.querySelector("#Weight").value);
  const results = document.querySelector("#results");

  if (
    height === undefined ||
    height === "" ||
    height <= 0 ||
    isNaN(height) ||
    typeof height === "string"
  ) {
    results.innerHTML = `Please give a valid height`;
  } else if (
    weight === undefined ||
    weight === "" ||
    weight <= 0 ||
    isNaN(weight) ||
    typeof weight === "string"
  ) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    const bmiValue = parseFloat(bmi); // Parse BMI value as float

    if (bmiValue < 18.6) {
      const txt1 = document.createElement("span");
      txt1.innerHTML = `You need to eat more`;
      form.appendChild(txt1);
    } else if (bmiValue >= 18.6 && bmiValue < 25) {
      const txt2 = document.createElement("span");
      txt2.innerHTML = `You're gaining weight`;
      form.appendChild(txt2);
    } else {
      const txt3 = document.createElement("span");
      txt3.innerHTML = `Just go to gym`;
      form.appendChild(txt3);
    }

    // Reset input fields and messages after submitting
    form.reset(); // Reset input fields
    // setTimeout(() => { // Remove dynamically added messages after a delay
    //   form.innerHTML = ''; // Clear all content inside form
    // }, 3000); // Adjust the delay as needed
  }
});
