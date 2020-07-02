var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.f1 = function () {
        console.log("O nome dessa pessoa é: " + this.name);
    };
    return Person;
}());
var Person1 = /** @class */ (function (_super) {
    __extends(Person1, _super);
    function Person1(name, age, eyeColor) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        _this.eyeColor = eyeColor;
        return _this;
    }
    Person1.prototype.f1 = function () {
        console.log("O nome dessa pessoa é: " + this.name + " e tem " + this.age + " anos.");
        console.log("E lembrei, ele tem olhos de cor " + this.eyeColor + ".");
    };
    Person1.prototype.f2 = function () {
        console.log("f2 foi chamada");
    };
    return Person1;
}(Person));
//var p1 = new Person("Sr. Marinho");
var p1 = new Person1("Sr. Marinho", 29, "castanho");
p1.f1();
p1.f2();
