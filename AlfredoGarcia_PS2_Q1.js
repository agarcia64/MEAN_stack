function* fibGen (n = null, curr = 0, next = 1) {
    if (n === 0)
        return curr;

    let m;
    if (n !== null){
        m = n-1;
    }
    else {
        m = null;
    }

    yield curr;
    yield *fibGen(m, next, curr + next);
}

function* evensOnly (n = 0, gen = null) {
    let genCheck = gen.next().value;

    // reject odd numbers
    while(genCheck % 2 != 0){
        genCheck = gen.next().value;
        //console.log(genCheck);
    }

    yield genCheck;
    yield *evensOnly(n, gen);
}

let gen = fibGen(20);
let temp = evensOnly(5, gen);
const disp = () => (temp.next().value);

console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
