const test = require("node:test");      // Node's built-in test tool
const assert = require("node:assert");  // checks that values match
const { calculate } = require("./calculator.js");

// Each test: run the function, check the answer
test("adds", () => assert.strictEqual(calculate(2, "+", 3), 5));
test("subtracts", () => assert.strictEqual(calculate(5, "-", 3), 2));
test("multiplies", () => assert.strictEqual(calculate(4, "*", 3), 12));
test("divides", () => assert.strictEqual(calculate(8, "/", 2), 4));
test("divide by zero", () => assert.strictEqual(calculate(1, "/", 0), "Error"));