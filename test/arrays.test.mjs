import { describe, it, expect } from "vitest";
describe("inserting new elements in array", () => {
  const inseredNumbers = [-10, -20];
  it("inserting at begining of array", () => {
    const ar = [1, 2];
    const expected = [-10, -20, 1, 2];
    ar.unshift(...inseredNumbers);
    expect(ar).toEqual(expected);
  });
  it("adding new numbers at end of array", () => {
    const ar = [1, 2];
    const expected = [1, 2, -10, -20];
    ar.push(...inseredNumbers);
    expect(ar).toEqual(expected);
  });
  it("inserting new number at middle of array", () => {
    const ar = [1, 2];
    const expected = [1, -10, -20, 2];
    ar.splice(1, 0, ...inseredNumbers);
    expect(ar).toEqual(expected);
  });
});

describe("sorting array", () => {
  const array = [10, 1000, -10, 30, 60];
  const objects = [{ x: 4 }, { x: 5 }];
  it("numbers native sorting soting", () => {
    const expected = [-10, 10, 30, 60, 1000];
    expect(array.toSorted((a, b) => a - b)).toEqual(expected);
  });
  it("includes", () => {
    expect(array.includes({ x: 4 })).toBeFalsy();
    expect(array.includes(1000)).toBeTruthy();
    expect(array.includes(200)).toBeFalsy();
  });

  it("testing for array of objects", () => {
    expect(objects.find((obj) => obj.x === 4)).toBeTruthy();
    expect(objects.find((obj) => obj.x === 1)).toBeFalsy();
  });

  it("testing for all element match acondition", () => {
    expect(array.every((num) => num % 2 === 0)).toBeTruthy();
  });
});
