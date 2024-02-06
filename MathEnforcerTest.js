import { expect } from 'chai';
import { mathEnforcer } from '../MathEnforcer.js';

describe('mathEnforcer', () => {
    describe("addFive", () => {
        it('should return undefined for non-numeric input', () => {
            const result = mathEnforcer.addFive('Steffy');
            expect(result).to.be.undefined;
        });
        it('should return undefined for string number input', () => {
            const result = mathEnforcer.addFive('5');
            expect(result).to.be.undefined;
        });

        it('should return result + 5 for numeric input', () => {
            const result = mathEnforcer.addFive(5);
            
            expect(result).to.equal(10);
        
        });
        it('should return correct result  for floating point number', () => {
            const result = mathEnforcer.addFive(1.01);
            expect(result).to.be.closeTo(6.01,0.01);
            
        });
        it('should return correct result  for floating point number with a lot of digits', () => {
            const result = mathEnforcer.addFive(1.07890126695841);
            expect(result).to.be.closeTo(6.07890126695841,0.01);
            
        });
        it('should return correct result  for negative number ', () => {
            const result = mathEnforcer.addFive(-5);
            expect(result).to.equal(0);
            
        });
    });

    describe("subtractTen", () => {
        it('should return undefined for non-numeric input', () => {
            const result = mathEnforcer.subtractTen('Steffy');
            expect(result).to.be.undefined;
        });
        it('should return undefined for string number input', () => {
            const result = mathEnforcer.subtractTen('5');
            expect(result).to.be.undefined;
        });

        it('should return result - 10 for numeric input', () => {
            const result = mathEnforcer.subtractTen(20);
            
            expect(result).to.equal(10);
        
        });
        it('should return correct result  for floating point number', () => {
            const result = mathEnforcer.subtractTen(1.01);
            expect(result).to.be.closeTo(-8.99,0.01);
            
        });
        it('should return correct result  for floating point number with a lot of digits', () => {
            const result = mathEnforcer.subtractTen(1.07890126695841);
            expect(result).to.be.closeTo(-8.92109873304159,0.01);
            
        });
        it('should return correct result  for negative number ', () => {
            const result = mathEnforcer.subtractTen(-5);
            expect(result).to.equal(-15);
            
        });
     
    });

    describe("sum", () => {
        it('should return undefined for non-numeric input', () => {
            const result = mathEnforcer.sum('Steffy',4);
            expect(result).to.be.undefined;
        });
        it('should return undefined for string number input', () => {
            const result = mathEnforcer.sum('5',"4");
            expect(result).to.be.undefined;
        });

        it('should return correct result  for numeric input', () => {
            const result = mathEnforcer.sum(20,10);
            
            expect(result).to.equal(30);
        
        });
        it('should return correct result  for floating point number', () => {
            const result = mathEnforcer.sum(1.01,1.01);
            expect(result).to.be.closeTo(2.02,0.01);
            
        });
        it('should return correct result  for floating point number with a lot of digits', () => {
            const result = mathEnforcer.sum(1.07890126695841,2.3);
            expect(result).to.be.closeTo(3.37890126695841,0.01);
            
        });
        it('should return correct result  for negative number ', () => {
            const result = mathEnforcer.sum(-5,-10);
            expect(result).to.equal(-15);
            
        });
    });
});
