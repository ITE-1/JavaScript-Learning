const log = function(a, b, ...rest) { //rest собирает отдельные сущности в массив
    console.log(a, b, rest) 
}

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) {
    
    return number * basis;
}
console.log(calcOrDouble(10));