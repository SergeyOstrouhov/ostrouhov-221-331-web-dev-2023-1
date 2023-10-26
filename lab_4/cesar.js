function sdvig(simb, dif) {
    let alph = 'абвгдеёжзиклмнопрстуфхцчшщъыьэюя';
    if (!alph.includes(simb)) {
        return simb;
    }
    let res = alph.indexOf(simb);
    res += dif; 
    if (res < 0) {
        res += alph.length; 
    }
    res %= alph.length; 
    return alph[res];
}

function cesar(str, shift, action) {
    let res = '';
    if (action === 'decode') {
        shift = - shift;
    }
    const len = str.length;
    for (let i = 0; i < len; i++) {
        res += sdvig(str[i], shift); 
    }
    return res;
}

let text = 'я люблю js';
console.log(cesar(text, 3, 'encode'));

// for (let i = 0; i < 33; i++) {
//     console.log(cesar('эзтыхз фзъзъз', i, 'decode'));
// }
//овет на вопрос какой текст представлен шифротектом "эзтыхз фзъзъз" - "хакуна матата"