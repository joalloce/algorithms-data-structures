import insertSort from "./insertSort";

describe("Insert Sort", () => {
  test("sorting [1, 5, 3, 2, 4]", () => {
    expect(insertSort([1, 5, 3, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
