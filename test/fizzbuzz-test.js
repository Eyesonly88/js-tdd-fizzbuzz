YUI.add('fizzbuzz-test', function(Y){
	
	var Assert      = Y.Assert,
    FizzBuzz 		= Y.FizzBuzz,
    suite;

	// -- Suite --------------------------------------------------------------------
	suite = new Y.Test.Suite('FizzBuzz Suite');

	// -- Add Test Cases to our Suite --------------------------------------------------------------------
	
	// -- Number Division Tests --------------------------------------------------------------------
	suite.add(new Y.Test.Case({

        name : "Number Division Tests",

        'Passing a number divisible by Three should return true' : function () {
        	Assert.isTrue(FizzBuzz.isDivisibleByThree());
        }

    }));

	// -- Add our Suite to the Test Runner --------------------------------------------------------------------
	Y.Test.Runner.add(suite);

}, 0.1, {requires:['fizzbuzz']});