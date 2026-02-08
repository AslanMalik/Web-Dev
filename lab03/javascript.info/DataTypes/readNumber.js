
function readNumber( number) {
    do {
        alert(number);
    }while (true) {
        if(typeof number == "number") {
            readNumber(prompt("Enter a number"), 0);
        }
    }
}

function readNumber() {
    let num;

    do {
        num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );

    if (num === null || num === '') return null;

    return +num;
}

alert(`Read: ${readNumber()}`);