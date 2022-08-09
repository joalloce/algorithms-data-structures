import bubbleSort from "./bubbleSort";

describe("Bubble Sort", () => {
  test("sorting [1, 3, 2, 4]", () => {
    expect(bubbleSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });
});
