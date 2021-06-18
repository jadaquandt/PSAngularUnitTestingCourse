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
    it('should be true if true', () => {
        //arrange
        sut.a = false;

        //act 
        sut.a = true;

        //assert
        expect(sut.a).toBe(true);
    })
})

//Now this whole test, as it stands right now, is a little bit of a silly example since all we do is create a property on an object, initialize it to one value, set it to another value, 
//and then assert that it is the second value. But this is the core essence of what a test is. We get our initial state, we change that state, and then we assert that the new state is 
//what we expect it to be. This is the essence of writing a unit test, and following this structure will help our unit tests be as effective as they can be.