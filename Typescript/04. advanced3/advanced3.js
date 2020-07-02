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
var class2 = /** @class */ (function () {
    function class2() {
    }
    return class2;
}());
var obj1 = { name: "Felipe Israel Marinho", age: 29 };
console.log(obj1);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.eating = function (food) {
        if (food === void 0) { food = "none"; }
        console.log(this.name + " comeu " + food + ".");
    };
    return Person;
}());
var Obj1clss = /** @class */ (function (_super) {
    __extends(Obj1clss, _super);
    function Obj1clss(name) {
        return _super.call(this, name) || this;
    }
    Obj1clss.prototype.eating = function (food) {
        if (food === void 0) { food = "comida japonesa"; }
        console.log("obj1clss");
        _super.prototype.eating.call(this, food);
    };
    return Obj1clss;
}(Person));
var Obj2clss = /** @class */ (function (_super) {
    __extends(Obj2clss, _super);
    function Obj2clss(name) {
        return _super.call(this, name) || this;
    }
    Obj2clss.prototype.eating = function (food) {
        if (food === void 0) { food = "pastel de feira"; }
        console.log("obj2clss");
        _super.prototype.eating.call(this, food);
    };
    return Obj2clss;
}(Person));
var p1 = new Person("Felipe Marinho");
p1.eating();
var obj1clss = new Obj1clss("Um cara qualquer");
obj1clss.eating();
var obj2clss = new Obj2clss("Um outro cara qualquer");
obj2clss.eating();
obj2clss.eating("vaquejada");
