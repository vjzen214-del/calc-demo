// Does the math. op is one of: + - * /
function calculate(a, op, b) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) return "Error"; // can't divide by zero
    return a / b;
  }
  return "Error"; // unknown operator
}

// Lets Node (the tests) import this file. Browsers ignore this line.
if (typeof module !== "undefined") module.exports = { calculate };