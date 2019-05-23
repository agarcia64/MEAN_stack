const alphatize = (input) => input.split('').sort().join('').trim();

let input = "supercalifragilisticexpialidocious";
console.log(`input: ${alphatize(input)}`);