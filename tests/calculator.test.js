import { Add } from "../src/calculator.js";

test("returns 0 for empty string", () => {
  expect(Add("")).toBe(0);
});

test("returns the number for single number", () => {
  expect(Add("1")).toBe(1);
});