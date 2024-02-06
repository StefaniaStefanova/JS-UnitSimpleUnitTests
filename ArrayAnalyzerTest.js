import { analyzeArray } from "../ArrayAnalyzer.js";
import { expect } from "chai";
describe('analyzeArray', () => {
    it('should return min, max, and length for an array of numbers', () => {
        const result = analyzeArray([1, 2, 3, 4, 5]);
        expect(result).to.deep.equal({ min: 1, max: 5, length: 5 });
    });

    it('should return undefined for an empty array', () => {
        const result = analyzeArray([]);
        expect(result).to.be.undefined;
    });

    it('should return undefined for a non-array input', () => {
        const result = analyzeArray('not an array');
        expect(result).to.be.undefined;
    });

    it('should return min, max, and length for a single-element array', () => {
        const result = analyzeArray([42]);
        expect(result).to.deep.equal({ min: 42, max: 42, length: 1 });
    });

    it('should return min, max, and length for an array with equal elements', () => {
        const result = analyzeArray([10, 10, 10, 10]);
        expect(result).to.deep.equal({ min: 10, max: 10, length: 4 });
    });
});