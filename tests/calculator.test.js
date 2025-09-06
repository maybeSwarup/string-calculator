import { Add } from "../src/calculator.js";

test("returns 0 for empty string", () => {
  expect(Add("")).toBe(0);
});