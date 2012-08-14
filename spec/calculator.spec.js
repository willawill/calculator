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

    describe("Click on button", function () {
        describe("when click CE ", function () {
            beforeEach(function () {
                calculator.enter('232');

            })
            it("should clear the display", function () {
                calculator.enter('CE');
                expect(calculator.display()).toEqual("");
            });
        });
    });
});


