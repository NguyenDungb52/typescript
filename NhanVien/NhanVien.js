var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    return Staff;
}());
var Hieu = new Staff('Hieu', 'thienhotdog@gmail.com', 22);
console.log(Hieu.getName(), Hieu.getEmail(), Hieu.getAge());
