function minDigit(x) {
    let stroka = String(x);
    let result = 10;
    for (let i = 0; i < stroka.length; i ++) {
        if (Number(stroka[i]) < result) {
            result = Number(stroka[i]);
        }
    }
    return result;
}

console.log(minDigit(2343523591));