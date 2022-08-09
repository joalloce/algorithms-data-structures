import binarySearch from "./binarySearch";

describe("Binary Search", () => {
  test("searching 6 in [1, 2, 3, 4, 5, 6]", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 6)).toBe(5);
  });

  test("searching 1 in [1, 2, 3, 4, 5, 6]", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 1)).toBe(0);
  });

  test("searching 7 in [1, 2, 3, 4, 5, 6]", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6], 7)).toBe(-1);
  });
});
