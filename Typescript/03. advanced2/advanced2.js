var class1 = /** @class */ (function () {
    function class1(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    ;
    class1.prototype.func1 = function () {
        console.log("This is FUNC1()");
    };
    return class1;
}());
var obj1 = new class1("Felipe Israel Marinho", 29);
console.log(obj1);
obj1.func1();
var obj2 = new class1("Allison Baldan", 21);
