import getHeadsOrTails from '../src/get-heads-or-tails.js';

const test = QUnit.test;

test('less than .5 get heads', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .4;
    const expected = 'heads';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getHeadsOrTails(number);

    //Assert
    assert.equal(expected, result);
});

test('more than or equal to .5 get tails', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = .8;
    const expected = 'tails';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = getHeadsOrTails(number);

    //Assert
    assert.equal(expected, result);
});