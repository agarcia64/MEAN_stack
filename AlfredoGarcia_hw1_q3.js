const map = (f, str) => f(str);

const brokenC = (str) => {
    temp = str.split("c");
    for (i=1; i<temp.length; i++){
        temp[i] = "c" + temp[i];
    }
    return temp;
}

t1 = 'supercalifragilisticexpialidocious';

console.log("Part 1")
console.log(`map(brokenC, t1): ${(map(brokenC, t1))}`);

const repA = (str) => {
    dispObject = {originalString: str, modifiedString: "", numberReplaced: 0, length: t1.length}
    temp = str.split("a");
    mStr = "";
    numRep = temp.length;

    for (i=1; i<temp.length; i++){
        temp[i] = "A" + temp[i];
    }
    mStr = temp.join("");

    dispObject.modifiedString = mStr;
    dispObject.numberReplaced = numRep;
    return dispObject;
}

console.log("Part 2")
console.log(`map(repA, t1): ${(JSON.stringify(map(repA, t1)))}`);