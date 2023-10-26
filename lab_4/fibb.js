function fibb(n) {
    if (n <= 1) {
        return n;
    }
    let a = 0;
    let res = 1;
    let temp;
    for (let i = 2; i <= n; i++) {
        temp = a + res;
        a = res;
        res = temp;
    }
    return res;
}
console.log(fibb(10));