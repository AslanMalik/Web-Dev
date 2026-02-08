
function Calculator() {

    this.read = function () {
        this.a = +prompt("Enter a number", 0);
        this.b = +prompt("Enter a number", 0);
    } ;

    this.sum = function () {
        alert(this.a + this.b);
    }

    this.mul = function () {
        alert(this.a * this.b);
    }
}


let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );