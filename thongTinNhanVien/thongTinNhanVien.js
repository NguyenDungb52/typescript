var Employee = /** @class */ (function () {
    function Employee(arr) {
        this.arrNV = arr;
    }
    Employee.prototype.createNV = function (hoTen, gioiTinh, email, SDT) {
        var arr = {
            hoTen: hoTen,
            gioiTinh: gioiTinh,
            email: email,
            SDT: SDT
        };
        this.arrNV.push(arr);
    };
    Employee.prototype.remoteNV = function (hoTen) {
        for (var i = 0; i < this.arrNV.length; i++) {
            if (this.arrNV[i].hoTen == hoTen) {
                this.arrNV.splice(i, 1);
            }
        }
    };
    Employee.prototype.getNV = function () {
        for (var i = 0; i < this.arrNV.length; i++) {
            console.log(this.arrNV[i].hoTen, this.arrNV[i].gioiTinh, this.arrNV[i].email, this.arrNV[i].SDT);
        }
    };
    return Employee;
}());
var arrNv = [
    {
        hoTen: "Hieu",
        gioiTinh: "Nam",
        email: "thienhotdog@gmail.com",
        SDT: "0123456"
    },
    {
        hoTen: "Dung",
        gioiTinh: "Nam",
        email: "Dungb52@gmail.com",
        SDT: "0986433"
    }
];
var arrNV = new Employee(arrNv);
arrNV.getNV();
// arrNV.remoteNV("Dung")
// arrNV.getNV()
arrNV.createNV("dat", "Nu", "Dungb52@gmail.com", "0986433");
arrNV.getNV();
