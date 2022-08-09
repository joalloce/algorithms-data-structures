import factorial from "./factorial";

describe("Factorial", () => {
  test("if factorial of 5 is 120", () => {
    expect(factorial(5)).toBe(120);
  });
});
