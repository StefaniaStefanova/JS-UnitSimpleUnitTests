import { expect } from 'chai'
import{rgbToHexColor }from'../RGBtoHex.js'

describe('rgbToHexColor',()=>{
    it('shouldreturned undefined if red value is invalid',()=>{
        const nonNumericRedValueResult=rgbToHexColor('223',0,0);
        const negativeRedValueResult=rgbToHexColor(-223,0,0);
        const tooBigRedValue=rgbToHexColor(999,0,0);
        expect(nonNumericRedValueResult).to.be.undefined;
        expect(negativeRedValueResult).to.be.undefined;
        expect(tooBigRedValue).to.be.undefined;
        

    })
    it('shouldreturned undefined if green value is invalid',()=>{
        const nonNumericGreenValueResult=rgbToHexColor('123',0,0);
        const negativeGreenValueResult=rgbToHexColor(-123,0,0);
        const tooBigGreenValue=rgbToHexColor(0,999,0);
        expect(nonNumericGreenValueResult).to.be.undefined;
        expect(negativeGreenValueResult).to.be.undefined;
        expect(tooBigGreenValue).to.be.undefined;

    })
    it('shouldreturned undefined if blue value is invalid',()=>{
        const nonNumericBlueValueResult=rgbToHexColor('12',0,0);
        const negativeBlueValueResult=rgbToHexColor(-12,0,0);
        const tooBigBlueValue=rgbToHexColor(0,0,999);
        expect(nonNumericBlueValueResult).to.be.undefined;
        expect(negativeBlueValueResult).to.be.undefined;
        expect(tooBigBlueValue).to.be.undefined;
    })
    it('should return a correct hex value if a correct rgb is givven',()=>{
        const redValue=223;
        const greenValue=123;
        const blueValue=12;
        const result=rgbToHexColor(redValue,greenValue,blueValue);
        expect(result).to.equal('#DF7B0C');
    })
    it('should return a correct hex value if a max rgb value is givven',()=>{
        const redValue=255;
        const greenValue=255;
        const blueValue=255;
        const result=rgbToHexColor(redValue,greenValue,blueValue);
        expect(result).to.equal('#FFFFFF');
    })
    it('should return a correct hex value if a min rgb value is givven',()=>{
        const redValue=0;
        const greenValue=0;
        const blueValue=0;
        const result=rgbToHexColor(redValue,greenValue,blueValue);
        expect(result).to.equal('#000000');
    })
})