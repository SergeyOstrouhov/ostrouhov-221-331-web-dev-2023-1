function gcd(a, b) {
    while (a != 0 && b != 0) {
        if (a >= b) {
            a %= b; 
        } else {
            b %= a;
        }
    }
    return a || b;
}
console.log(gcd(118, 166));