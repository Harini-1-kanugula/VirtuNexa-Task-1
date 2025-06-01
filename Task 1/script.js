// Validate input
function validateInput(value) {
    const num = parseInt(value);
    if (isNaN(num) || num < 0) {
      return null;
    }
    return num;
  }
  
  // Iterative factorial
  function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  // Recursive factorial
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  // Display result
  function displayResult(value, method) {
    document.getElementById("result").innerHTML = `Result (${method}): <strong>${value}</strong>`;
  }
  
  // Handler for iterative
  function calculateIterative() {
    const input = document.getElementById("numberInput").value;
    const number = validateInput(input);
    
    if (number === null) {
      alert("Please enter a valid positive integer.");
      return;
    }
  
    const result = factorialIterative(number);
    displayResult(result, "Iterative");
  }
  
  // Handler for recursive
  function calculateRecursive() {
    const input = document.getElementById("numberInput").value;
    const number = validateInput(input);
    
    if (number === null) {
      alert("Please enter a valid positive integer.");
      return;
    }
  
    const result = factorialRecursive(number);
    displayResult(result, "Recursive");
  }
  