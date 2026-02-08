

function Accumulator( startingValue ) {
    this.value = startingValue;

    this.read = function() {
        let a = +prompt("a?", 0);
        this.value += a;
    }
}



let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

let str = "Hello";

str.test = 5; // (*)

alert(str.test);
