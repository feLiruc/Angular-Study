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
var person = /** @class */ (function () {
    function person(id, firstName, lastName, eyeColor, hairColor, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
        this.age = age;
        // this.id = ID;
        // this.firstName = firstname;
        // this.lastName = lastname;
        // this.eyeColor = eyecolor;
        // this.hairColor = haircolor;
        // this.age = AGE;
    }
    person.return_text = function () {
        console.log("Ola um texto estático");
    };
    person.prototype.doAction = function () { };
    ;
    person.prototype.getName = function () {
        console.log("My name is " + this.firstName + " " + this.lastName + "!!!");
    };
    ;
    person.prototype.getAllData = function () {
        var toPrint = "========= Start of all data =========\n";
        toPrint += "\t\t      id: " + this.id + "\n";
        toPrint += "    firstName: " + this.firstName + "\n";
        toPrint += "     lastName: " + (this.lastName ? this.lastName : "No Last Name") + "\n";
        toPrint += "     eyeColor: " + (this.eyeColor ? this.eyeColor : "No Eye Color") + "\n";
        toPrint += "    hairColor: " + (this.hairColor ? this.hairColor : "No Hair Color") + "\n";
        toPrint += "          age: " + (this.age ? this.age : "No Age") + "\n";
        toPrint += "========== End of all data ==========";
        console.log(toPrint);
    };
    // private   id:		  number;
    // private   firstName:  string;
    // private   lastName:   string;
    // private   eyeColor:   string;
    // public    hairColor:  string;
    // protected age:		  number;
    person.static_field = "Hello static world!";
    return person;
}());
// field == variable == property
var person1 = new person(1, "Maria", "José", "Brown", "Blonde", 29);
// Erro, pois a propriedade/campo agora esta como privado
// person1.firstName = "Senhor";
person1.getName();
person1.getAllData();
person1.hairColor = "Red";
person1.getName();
person1.getAllData();
var person2 = new person(2, "Felipe", "Marinho");
person2.getName();
person2.getAllData();
console.log(person.static_field);
person.return_text();
var class1 = /** @class */ (function () {
    function class1(field1, field2) {
        this.field1 = field1;
        this.field2 = field2;
    }
    return class1;
}());
var class2 = /** @class */ (function (_super) {
    __extends(class2, _super);
    function class2(field3, field1, field2) {
        var _this = _super.call(this, field1, field2) || this;
        _this.field3 = field3;
        return _this;
    }
    return class2;
}(class1));
var obj1 = new class1("hello", "world");
var obj2 = new class2("Olá", "Mundo", "Meu");
console.log(obj1);
console.log(obj2);
