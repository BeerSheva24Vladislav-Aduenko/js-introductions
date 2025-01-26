import { describe, it, expect } from "vitest";
import { myBind } from "../functions.mjs";
describe("myBind test according to the TODO comments", () => {
  const point = { x: 3, y: 4 };
  const dimensions = { x: 3, y: 4, z: 30 };
  point.sumArguments;
  function sumArguments(num3 = 0, num4 = 0) {
    return this.x + this.y + num3 + num4;
  }
  sumArguments.bind = myBind;
  sumArguments.toString = function () {
    return this.name;
  };
  console.log(`sumArguments string: ${sumArguments}`);
  const fun = sumArguments.bind(dimensions);
  it("no additional parameters passed", () => {
    expect(fun()).toBe(7);
  });
  it(" all parameters are passed inside fun", () => {
    expect(fun(10, 20)).toBe(37);
  });
  it(" all parameters are passed inside bind along with this argument", () => {
    const fun = sumArguments.bind(dimensions, 10, 20);
    expect(fun()).toBe(37);
  });
  it("part of additional arguments are passed in bind method and other arguments are passed in the fun", () => {
    const fun = sumArguments.bind(dimensions, 10);
    expect(fun(20)).toBe(37);
  });
});
