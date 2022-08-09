import fibonacci from "./fibonacci";

describe("Fibonacci", () => {
  test("if fibonacci of 7 is 13", () => {
    expect(fibonacci(7)).toBe(13);
  });
});
