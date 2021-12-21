import { StrengthPipe } from "./strength.pipe"

//No dependencies, just one method

describe('StrengthPipe', () => {
    it('should display weak if strength is 5', () => {
        //arrange
        let pipe = new StrengthPipe();
        //act is pipe.transform(5)
        //assert
        expect(pipe.transform(5)).toEqual('5 (weak)')
    })

    it('should display strong if strength is 10', () => {
        let pipe = new StrengthPipe();

        expect(pipe.transform(10)).toEqual('10 (strong)')
    })

})