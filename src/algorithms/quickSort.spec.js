import quickSort from "./quickSort";

describe("QuickSort", () => {
  test("sorting [50, 65, 99, 87, 74, 63, 76, 100, 92, 30]", () => {
    expect(quickSort([50, 65, 99, 87, 74, 63, 76, 100, 92, 30])).toEqual([
      30, 50, 63, 65, 74, 76, 87, 92, 99, 100,
    ]);
  });
});
