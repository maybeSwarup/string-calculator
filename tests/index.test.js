import { runInteractiveCLI } from "../src/index.js";

test("interactive CLI function exists", () => {
  expect(typeof runInteractiveCLI).toBe("function");
});

test("interactive CLI function is properly defined", () => {
  // Test that the function exists and has the expected properties
  expect(typeof runInteractiveCLI).toBe("function");
  expect(runInteractiveCLI.length).toBe(0); // No parameters expected
});