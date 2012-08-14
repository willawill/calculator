function Calculator() {
    var inputValue = "0";
    this.enter = function (input) {
        if (!isNaN(input)) {
            if (inputValue == "0" && input != 0)
                inputValue = input;

            else if(inputValue == "0" && input == 0)
                inputValue = "0" ;
            else
                inputValue += input;
        }
        else
            this.operation(input)
    };

    this.display = function () {
        return inputValue;

    }
    this.clear = function () {
        inputValue = "";
    }

    this.operation = function (input) {
        if (input == 'CE')
            this.clear()
    }

}



