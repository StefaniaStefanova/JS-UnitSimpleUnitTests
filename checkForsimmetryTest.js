import { expect } from 'chai'
import{ isSymmetric }from'../checkForsimmetry.js'

describe('isSimmetric',() =>{
it ('if givven an empty array should return true',()=>{
    //arrange 
    const inputArray=[]
    //act
    const result=isSymmetric(inputArray)
    //assert
    expect(result).to.be.true
})
it('should return false if a non-array value is givven',()=>{
    
    const nonresult=isSymmetric(NaN)
    const undefinedResult=isSymmetric(undefined)
    const nullResult=isSymmetric(null)
    expect(nonresult).to.be.false
    expect(undefinedResult).to.be.false
    expect(nullResult).to.be.false
})
it('should return false if non-symmetric array is given',()=>{
    const nonSymmetricArray=[1, 2, 3, 4]
    const result=isSymmetric(nonSymmetricArray)
    expect(result).to.be.false
})
it('should return true if a symmetric array is given',()=>{
    const symmetricArray=[3,2,1,2,3]
    const result=isSymmetric(symmetricArray)
    expect(result).to.be.true
})
it('should return false for symmetric looklike values',()=>{
    const symmetricArray=['1','2','3',2,1]
    const result=isSymmetric(symmetricArray)
    expect(result).to.be.false
})

})