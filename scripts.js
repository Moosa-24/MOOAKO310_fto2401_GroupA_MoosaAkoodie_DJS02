const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const dividend = parseFloat(entries.get("dividend"));
  const divider = parseFloat(entries.get("divider"));

  if (isNaN(dividend) || isNaN(divider)) {
    // Check if either input is not a number
    displayError("Something critical went wrong. Please reload the page.");
    console.error("Invalid input. Inputs must be numbers.");
    return;
  }

  if (divider === 0) {
    // Check if the divider is zero
    displayError("Division not performed. Invalid number provided. Try again.");
    console.error("Division by zero error.");
    return;
  }

  if (divider % 1 !== 0) {
    // Check if the division results in a decimal number
    displayResult(Math.floor(dividend / divider));
  } else {
    // Perform the division and display the result
    displayResult(dividend / divider);
  }
});

function displayResult(value) {
  result.innerText = value;
}

function displayError(message) {
  result.innerText = message;
  document.body.innerHTML = "<h1>" + message + "</h1>";
}
