describe('my first test', () => {
    //system under test = sut
    let sut;

    //This will reset the state so that we know that with every test we don't have any effects from a previous test that's holding over and polluting the state of future tests. 
    beforeEach(() => {
        //This is very important. We need to put code inside of the beforeEach that resets the state so that we don't pollute future tests with changes that have been made in previous tests. 
        sut = {}
    })

    //Next an actual test, which we use with an it function. It's very customary to start your it statements with the word should. 
    //the describe and it functions should have strings that make sense when appended
    it('should be true if true')
})