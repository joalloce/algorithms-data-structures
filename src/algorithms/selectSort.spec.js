import selectSort from "./selectSort";

describe("Select Sort", () => {
  test("sorting [1, 3, 2, 4]", () => {
    expect(selectSort([1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
  });
});
