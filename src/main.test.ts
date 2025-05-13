import { describe, expect, it } from "vitest";
import { add } from "./main";

describe("add", () => {
  it("should add two numbers", () => {
    expect(add(2, 7)).toEqual(9);
  });
});
