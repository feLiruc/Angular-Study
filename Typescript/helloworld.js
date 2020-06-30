// BÁSICO
var hw = "Hello World again";
console.log(hw);
// TIPO DE DADOS
var num1 = 5;
var str1 = "Olá Mundo";
var bool1 = true;
var bool2 = false;
// FUNÇÕES
function func1() {
    console.log("Olá Função!");
}
function func2(par1, par2, par3, par4, par5, par6) {
    if (par6 === void 0) { par6 = "Default Value"; }
    console.log(par1);
    console.log(par2);
    console.log(par3);
    console.log(par4);
    if (par5 === undefined) {
        console.log("undefined parameter");
    }
    else {
        console.log(par5);
    }
    console.log(par6);
}
func1();
func2("Oláááá func2", 66, ["Vixi", "Maria"], 123);
console.log(num1);
console.log(str1);
console.log(bool1);
console.log(bool2);
console.log("#############################################################################");
console.log("#############################################################################");
console.log("#############################################################################");
// ARRAYS E TUPLAS
var array1 = ["Hello", "World"];
var tupla1 = ["Hello", "World", 67, true, 12, false, "teste", undefined, "Hello World"];
console.log(array1);
var array2 = ["Hello", "world", "novamente"];
console.log(array2);
var tupla2 = ["Teste", "World", 99];
console.log(tupla2);
var tupla3 = ["Hello", "WORLD", "password"];
console.log(tupla3);
var tupla4 = ["5o elemento", "ui", "eita, ", 96];
tupla4.push("1", "2", "3", 4);
console.log(tupla4);
// UNIÕES
var var1 = "teste";
var1 = "Teste novamente";
// ERROR : var1 = 99;
// Para arrumar, mudar tipo de variavel para any
console.log(var1);
var var2 = "teste";
console.log("O valor de var2 é: " + var2);
var2 = 90;
console.log("Agora, o valor de var2 é: " + var2);
var var3;
var array3;
array3 = ["Hello", "Felipe", "Meu Amigo"];
console.log(array3);
array3 = [12, 13, 14, 999];
console.log(array3);
function func3(param1) {
    if (typeof param1 == "string") {
        console.log("O tipo de dado do parametro 1 é STRING");
        console.log("O valor do parametro 1 é: " + param1);
    }
    else if (typeof param1 == "number") {
        console.log("O tipo de dado do parametro 1 é NUMERO");
        console.log("O valor do parametro 1 é: " + param1);
    }
    else {
        console.log(param1);
    }
}
func3("OLA");
func3(987654321);
func3(["987654321", "123456789", "hello world"]);
var person = {
    FirstName: "Felipe",
    LastName: "Marinho",
    EyeColor: "Castanho",
    Age: 29,
    greeting: function () { return "Olá " + person.FirstName + "!!!"; }
};
var person2 = {
    FirstName: "Allison",
    LastName: "Baldan",
    EyeColor: "Azul",
    Age: "27",
    greeting: function () { return "Olá " + person2.FirstName + "!!!"; }
};
console.log(person);
console.log(person2);
console.log(person.greeting());
console.log(person2.greeting());
var array4;
array4 = [5, 7, 9, 1, 2];
console.log(array4);
