import { Add } from "../src/calculator.js";

test("returns 0 for empty string", () => {
  expect(Add("")).toBe(0);
});

test("returns the number for single number", () => {
  expect(Add("1")).toBe(1);
});

test("returns sum for two numbers", () => {
  expect(Add("1,2")).toBe(3);
});

test("returns sum for unknown amount of numbers", () => {
  expect(Add("1,2,3,4,5")).toBe(15);
});

test("supports newline as delimiter", () => {
  expect(Add("1\n2,3")).toBe(6);
});