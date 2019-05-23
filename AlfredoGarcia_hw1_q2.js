
const helper = (expression) => {
    let left = parseInt(expression.charAt(0));
    let right = parseInt(expression.charAt(2));
    let op = expression.charAt(1);

    switch (op){
        case '+':
            return left + right;
            break;
        case '-':
            return left - right;
            break;
        case '*':
            return left * right;
            break;
        case '/':
            return left / right;
            break;
    }
    return null;
}

const eval = expression => (helper(expression))

t1 = '4+2'
t2 = '5*7'
t3 = '6-1'
t4 = '9/2'

console.log(`t1: ${(eval(t1))}`)
console.log(`t2: ${(eval(t2))}`)
console.log(`t3: ${(eval(t3))}`)
console.log(`t4: ${(eval(t4))}`)