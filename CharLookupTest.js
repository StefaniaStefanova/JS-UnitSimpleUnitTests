import { lookupChar } from "../CharLookup.js";
import { expect } from "chai";


describe('CharLookup', () => {

    it('return Incorrect index', () => {
    
    const num1=lookupChar('test',5);
    const char=lookupChar('test',-7);
    const zero=lookupChar('@',0);
    
    expect(num1).to.equal('Incorrect index')
    expect(char).to.equal('Incorrect index')
    
    
    })
    it('return undefined', () => {
    
        const string=lookupChar(3,3);
        const char=lookupChar("@",12.5);
        const zero=lookupChar('test',"3");
        expect(string).to.be.undefined
        expect(char).to.be.undefined
        expect(zero).to.be.undefined
        
        })
        it('return correct index', () => {
    
            const num1=lookupChar('test',3);
            const char=lookupChar('steffy',4);
            
            expect(num1).to.equal('t')
            expect(char).to.equal('f')
            
            
            })

})