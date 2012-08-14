/**
 * Created with IntelliJ IDEA.
 * User: ThoughtWorks
 * Date: 8/14/12
 * Time: 12:37 PM
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function () {
    var calculator = new Calculator();

    $('input[type=button]').click(function() {
            calculator.enter(this.value);
            $('.display').val(calculator.display());
   });
});