let a = parseFloat(prompt('Enter first number'));
let b = parseFloat(prompt('Enter second number'));
let c = parseFloat(prompt('Enter third number'));

var result = solveQuadratics(a, b, c);
document.write(result);

function findDiscr(a, b, c) {
    return Math.pow(b, 2) - 4 * a * c;
}

function calcFirstRoot(a, b, c, d) {
    return (-b + Math.sqrt(d)) / 2 * a;
}

function calcSecondRoot(a, b, c, d) {
    return (-b - Math.sqrt(d)) / 2 * a;
}

function solveQuadratics(a, b, c) {
    let discr = findDiscr(a, b, c);
    let x1, x2;
    if (discr > 0) {
        x1 = calcFirstRoot(a, b, c, discr);
        x2 = calcSecondRoot(a, b, c, discr);
        return 'x1= ' + x1 + ' ,x2= ' + x2;
    } else if (discr === 0) {
        return -b / 2 * a;
    } else  {
        return 'No roots'
    }

}




















