import { Add, StringCalculator } from "../src/calculator.js";

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

test("supports custom delimiter", () => {
  expect(Add("//;\n1;2")).toBe(3);
});

test("throws exception for negative numbers", () => {
  expect(() => Add("1,-2,3")).toThrow("negatives not allowed: -2");
});

test("tracks how many times Add was called", () => {
  const calculator = new StringCalculator();
  expect(calculator.GetCalledCount()).toBe(0);
  
  calculator.Add("1,2");
  expect(calculator.GetCalledCount()).toBe(1);
  
  calculator.Add("3");
  expect(calculator.GetCalledCount()).toBe(2);
});

test("ignores numbers greater than 1000", () => {
  expect(Add("2,1001")).toBe(2);
});

test("supports delimiters of any length", () => {
  expect(Add("//[***]\n1***2***3")).toBe(6);
});

test("supports multiple delimiters", () => {
  expect(Add("//[*][%]\n1*2%3")).toBe(6);
});

test("supports multiple delimiters with length > 1", () => {
  expect(Add("//[***][%%]\n1***2%%3")).toBe(6);
});