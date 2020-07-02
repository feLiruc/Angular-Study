var Objeto = /** @class */ (function () {
    function Objeto(name) {
        this.name = name;
    }
    return Objeto;
}());
var objeto1 = new Objeto("Mesa");
console.log(objeto1);
objeto1.name = "Cadeira";
console.log(objeto1);
