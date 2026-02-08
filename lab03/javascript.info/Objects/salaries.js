let salary = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salary) {
    let num = salary[key];
    sum = sum + num;
}


