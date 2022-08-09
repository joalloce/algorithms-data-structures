import shellSort from "./shellSort";

describe("ShellSort", () => {
  test("sorting [9, 6, 5, 8, 0, 7, 4, 3, 1, 2]", () => {
    expect(shellSort([9, 6, 5, 8, 0, 7, 4, 3, 1, 2])).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});
