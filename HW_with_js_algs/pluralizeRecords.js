function pluralizeRecords(n) {
    let ost = n % 10;
    let result = '';
    if (n >= 5 && n <= 20) {
        result = 'записей';
    } else if (ost == 1) {
        result = 'запись';
    } else if (ost > 1 && ost < 5) {
        result = 'записи';
    } else {
        result = 'записей';
    }
    return `В результате выполнения запроса было найдено ${n} ${result}.`;
}
console.log(pluralizeRecords(134));