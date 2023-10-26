function pow(x, n) {
    if (x > 0) {
        let result = x;
        for (let i = 1; i < n; i++) {
            result = result * x;
        }
        return result;
    } else {
        return Error('Неподдерживаемое значение степени!');
    }
}

console.log(pow(2, 5));

