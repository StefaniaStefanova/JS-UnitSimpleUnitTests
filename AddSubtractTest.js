import { expect } from 'chai'
import{createCalculator}from'../AddSubtract.js'

describe('createCalculator',() =>{
    it('should return 0 if no operation are executed on the calculator',()=>{
      const calculator=createCalculator()
      const result=calculator.get()
      expect(result).to.equal(0);
    })
    it('should return a negative num if only substract operations are executed on the calculator',()=>{
        const calculator=createCalculator()
        calculator.subtract(3)
        calculator.subtract(3)
        calculator.subtract(10)
        const result=calculator.get()
        expect(result).to.equal(-16);
    })
    it('should return a positive num if only add operations are executed on the calculator',()=>{
        const calculator=createCalculator()
        calculator.add(2)
        calculator.add(2)
        calculator.add(100)
        const result=calculator.get()
        expect(result).to.equal(104);
    })
    it('should return a handle num as strings',()=>{
        const calculator=createCalculator()
        calculator.add('2')
        calculator.add('2')
        calculator.add('100')
        calculator.subtract('104')
        const result=calculator.get()
        expect(result).to.equal(0);

    })
    it('should return a handle a mix of operations ',()=>{
        const calculator=createCalculator()
        calculator.add(2)
        calculator.add(2)
        calculator.add(100)
        calculator.add(-4)
        calculator.subtract(-100)
        calculator.subtract(200)
        const result=calculator.get()
        expect(result).to.equal(0);
    })
})