import { expect } from 'chai';

import { isOddOrEven } from '../OddorEven.js';

describe('isOddorEven', () => {

it('return undefined', () => {

const num=isOddOrEven(25);
const char=isOddOrEven(30);
const zero=isOddOrEven(0);
expect(num).to.be.undefined
expect(char).to.be.undefined
expect(zero).to.be.undefined

});
it('return even', () => {

    const evenword=isOddOrEven("chacha");
    const char=isOddOrEven("@@@@@@");
    const zero=isOddOrEven("");
    expect(evenword).to.equal('even');
    expect(char).to.equal('even');
    expect(zero).to.equal('even');
    
    });
    it('return odd', () => {

        const evenword=isOddOrEven("chach");
        const char=isOddOrEven("@@@@@");
        const zero=isOddOrEven(" ");
        expect(evenword).to.equal('odd');
        expect(char).to.equal('odd');
        expect(zero).to.equal('odd');

})
})