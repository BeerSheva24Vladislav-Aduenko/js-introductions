import { describe, expect, it } from "vitest";
describe("Object copying", () => {
  it("showing example of references assignment but not copy", () => {
    const person1 = { name: "Vasya", age: 25 };
    const person2 = person1;
    person2.gender = "male";
    expect(person1.gender).toBe("male");
  });
  it("copying using spread operator", () => {
    const person1 = { name: "Vasya", age: 25 };
    const person2 = { ...person1 };
    person2.city = "Lod";
    expect(person1.city).toBeUndefined();
    person1.city = "Lod";
    expect(person1 != person2).toBeTruthy();
    expect(person2).toEqual(person1);
    expect(person2).not.toBe(person1);
  });
  it("Not deep copying", () => {
    const person1 = {
      id: 123,
      address: {
        city: "Beersheba",
      },
    };
    const personCopy = { ...person1 };
    expect(personCopy).not.toBe(person1);
    expect(personCopy).toEqual(person1);
    personCopy.address.city = "Rehovot";
    expect(person1.address.city).toBe("Rehovot");
  });
  it("deep copying", () => {
    const person1 = {
      id: 123,
      address: {
        city: "Beersheba",
      },
    };
    const personCopy = JSON.parse(JSON.stringify(person1));
    personCopy.address.city = "Rehovot";
    expect(person1.address.city).toBe("Beersheba");
  });
});
describe("JSON functionality", () => {
  const obj = { id: 123, department: "QA", basicSalary: 10000 };
  it("getting JSON from JS object", () => {
    const expected = '{"id":123,"department":"QA","basicSalary":10000}';
    const actual = JSON.stringify(obj);
    expect(actual).toBe(expected);
  });
  it("getting JS object from JSON", () => {
    const jsonStr = JSON.stringify(obj);
    const actual = JSON.parse(jsonStr);
    expect(actual).not.toBe(obj); //it's not 'isSame'
    expect(actual).toEqual(obj); //it's 'isEqual'
  });
});
