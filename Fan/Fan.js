var Fan = /** @class */ (function () {
    function Fan(speed, radius, color, on) {
        this.on = on;
        this.speed = speed;
        this.radius = radius;
        this.color = color;
    }
    Fan.prototype.speedFan = function () {
        if (this.speed == 1) {
            this.SLOW = this.speed;
            return this.SLOW;
        }
        if (this.speed == 2) {
            this.MEDIUM = this.speed;
            return this.MEDIUM;
        }
        if (this.speed == 3) {
            this.FAST = this.speed;
            return this.FAST;
        }
    };
    Fan.prototype.toString = function () {
        if (this.on == false) {
            return "".concat(this.color, " ").concat(this.radius, " fan is off");
        }
        else {
            return "".concat(this.speedFan(), " ").concat(this.color, " ").concat(this.radius);
        }
    };
    return Fan;
}());
var Fan1 = new Fan(3, 10, 'yellow', true);
console.log(Fan1.toString());
var Fan2 = new Fan(2, 5, 'blue', false);
console.log(Fan2.toString());
