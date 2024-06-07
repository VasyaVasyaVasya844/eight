// BEGIN
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function sayPrimeOrNot(number) {
    if (isPrime(number)) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

export default sayPrimeOrNot;


// END