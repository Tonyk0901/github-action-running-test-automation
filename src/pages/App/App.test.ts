import { addNumbers } from "./App.utils";

describe("util 테스트", () => {
  test("1,2,3,4 을 더하면 10", () => {
    expect(addNumbers(1, 2, 3, 4)).toBe(9);
  });
});
