import {describe, it, expect} from 'vitest'
describe("inserting new elements in array", () => {
    const inseredNumbers = [-10, -20];
    it("inserting at begining of array", () => {
        const ar = [1, 2];
        const expected = [-10, -20, 1, 2];
        ar.unshift(...inseredNumbers);
        expect(ar).toEqual(expected);
    })
    it("adding new numbers at end of array", () => {
        const ar = [1, 2];
        const expected = [ 1, 2,-10, -20];
        ar.push(...inseredNumbers);
        expect(ar).toEqual(expected);
    })
    it("inserting new number at middle of array", () => {
        const ar = [1, 2];
        const expected = [ 1, -10, -20, 2];
        ar.splice(1,0,...inseredNumbers)
        expect(ar).toEqual(expected);
    })
})