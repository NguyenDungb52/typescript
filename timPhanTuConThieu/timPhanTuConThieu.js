var arrShort = /** @class */ (function () {
    function arrShort(numbers) {
        this.numbers = numbers;
    }
    arrShort.prototype.shortNumbers = function () {
        var arr = [];
        for (var i = 0; i < 10; i++) {
            if (this.numbers.indexOf(i) == -1) {
                arr.push(i);
            }
        }
        return arr;
    };
    return arrShort;
}());
var numbers = [0, 2, 3, 5, 7, 8, 9, 10];
var number = new arrShort(numbers);
console.log(number.shortNumbers());
