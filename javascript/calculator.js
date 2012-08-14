function Calculator() {
    var inputValue = "";
    this.enter = function (input) {
        if (!isNaN(input))
            if (!(inputValue.length == 0 && input ==0))
                inputValue += input;
        else
            this.operation(input)
    };

    this.display = function () {
        return inputValue;

    }
    this.clear = function () {
        inputValue = "";
    }

    this.operation = function(input){
         if (input=='CE')
            this.clear()
    }

}



