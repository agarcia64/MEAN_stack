const strToAry = (str) =>{
    let i = 0;
    let len = str.length;
    let ary = [];
    let temp = '';

    while(i < len) {
        while (str[i] != ' ' && len != i) {
            temp = temp.concat(str[i]);
            i+=1;
        }
        i+=1;
        ary.push(temp);
        temp = '';
    }

    return ary;
}

function* strGen(ary, start, end) {
    for (let i = start; i < end; i++){
        yield ary[i];
    }
}


let testStr = "All I know is something like a bird within her sang";
let testAry = strToAry(testStr);
let i = 0;
let len = testStr.length;

let testGen = strGen(testAry, i, len);
const disp = () => (testGen.next().value);

console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());
console.log(disp());









