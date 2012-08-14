function Calculator() {
    var inputValue = "0";
    var accumulateValue = 0;
    var currentOperation;
    var operationList={};


    this.add = function(){
        //accumulateValue += parseInt(inputValue);
        alert('add');
    }

    this.minus = function(){
        //return parseInt(inputValue) *(-1);
        alert('minus');
    }


    operationList['+']= this.add();
    operationList['-']= this.minus();





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
        if (input == 'CE')  {
            this.clear();
        }
        if (input == '+') {
            accumulateValue = parseInt(inputValue);
            currentOperation = '+';
            this.clear();
        }

        if (input == '-') {
            accumulateValue = parseInt(inputValue);
            currentOperation = '-';
            this.clear();
        }
        if (input == '='){
            var func = operationList[currentOperation];
            inputValue = accumulateValue.toString();
        }

    }



}



