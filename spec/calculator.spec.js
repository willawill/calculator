describe("Calculator", function () {
    var calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });


    describe("Entering single digits", function () {

        describe("when the first input is '0'", function () {
            it("should display 0 ", function () {
                calculator.enter("0");
                expect(calculator.display()).toEqual("0");
            });
        });

        describe("when the second input is '0' and the display is 0", function () {
            it("should display 0 ", function () {
                calculator.enter("0");
                expect(calculator.display()).toEqual("0");
            });
        });

        describe("when the second input is '1' and the display is 0", function () {
            it("should display 1 ", function () {
                calculator.enter("1");
                expect(calculator.display()).toEqual("1");
            });
        });

        describe("when entering '1'", function () {
            it("should display 1", function () {
                calculator.enter("1");
                expect(calculator.display()).toEqual("1");
            });
        });

        describe("when entering '1' and '2'", function () {
            it("should display 12", function () {
                calculator.enter("1");
                calculator.enter("2");
                expect(calculator.display()).toEqual("12");
            });
        });


    });

    describe("Do addition operation", function () {
        beforeEach(function () {
            calculator.enter('2');

        })
        describe("when click add button and enter another number", function () {
            it("should first clear the display", function () {
                calculator.enter('+');
                expect(calculator.display()).toEqual("");
            });

            it("should display 5", function () {
                calculator.enter('+');
                calculator.enter('5');
                expect(calculator.display()).toEqual("5");
            });

            it("should display 7 after click '=' button", function () {
                calculator.enter('+');
                calculator.enter('5');
                calculator.enter('=');
                expect(calculator.display()).toEqual("7");
            });
        });
    })

    describe("Do minus operation", function () {
        beforeEach(function () {
            calculator.enter('2');

        })
        describe("when click minus button and enter another number", function () {
            it("should first clear the display", function () {
                calculator.enter('-');
                expect(calculator.display()).toEqual("");
            });

            it("should display 5", function () {
                calculator.enter('-');
                calculator.enter('5');
                expect(calculator.display()).toEqual("5");
            });

            it("should display -3 after click '=' button", function () {
                calculator.enter('-');
                calculator.enter('5');
                calculator.enter('=');
                expect(calculator.display()).toEqual("-3");
            });
        });
    })

    describe("Click on operation button", function () {
        beforeEach(function () {
            calculator.enter('2');

        })
        describe("when click CE ", function () {
            it("should clear the display", function () {
                calculator.enter('CE');
                expect(calculator.display()).toEqual("");
            });
        });


    });
});


