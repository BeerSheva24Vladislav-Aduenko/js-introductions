import {describe, expect, it} from 'vitest';
describe ("Object copying", () => {
    
   it("showing example of references assignment but not copy", () => {
    const person1 = {name: "Vasya", age:25};
     const person2 = person1;
    person2.gender="male";
    expect(person1.gender).toBe("male")

   })
   it("copying using spread operator", () => {
    const person1 = {name: "Vasya", age:25};
    const person2 = {...person1}
    person2.city="Lod";
    expect(person1.city).toBeUndefined();
    person1.city="Lod";
    expect(person1 != person2).toBeTruthy();
    expect(person2).toEqual(person1);
    expect(person2).not.toBe(person1)
   });
  
})