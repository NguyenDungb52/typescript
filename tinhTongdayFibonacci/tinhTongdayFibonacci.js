
var fibonacci = /** @class */ (function () {
    function fibonacci(number) {
        this.num = number;
    }
    fibonacci.prototype.sumFibonacci = function () {
        var n1 = 0, n2 = 1, nextTerm;
        var tong = 0;
        var arrSum = [];
        for (var i = 0; i < this.num; i++) {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
            arrSum.push(n1);
        }
        console.log(arrSum);
        for (var j = 0; j < arrSum.length; j++) {
            tong += arrSum[j];
        }
        return tong;
    };
    return fibonacci;
}());
var tong = new fibonacci(5);
console.log(tong.sumFibonacci());
