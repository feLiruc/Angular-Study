interface Clinterface {
	name: string;
}
class class2 implements Clinterface {
	name: string;
}

interface Interface1 extends class2 {
	age: number;
}

var obj1:Interface1 = {name:"Felipe Israel Marinho", age:29}

console.log(obj1);

class Person {
	constructor(public name:string){}

	eating(food = "none"){
		console.log(this.name + " comeu " + food + ".");
	}
}
class Obj1clss extends Person {
	constructor(name:string){
		super(name);
	}

	eating(food = "comida japonesa"){
		console.log("obj1clss");
		super.eating(food);	
	}

}
class Obj2clss extends Person {
	constructor(name:string){
		super(name);
	}

	eating(food = "pastel de feira"){
		console.log("obj2clss");
		super.eating(food);	
	}

}
var p1 = new Person("Felipe Marinho");

p1.eating();

var obj1clss = new Obj1clss("Um cara qualquer");

obj1clss.eating();

var obj2clss = new Obj2clss("Um outro cara qualquer");

obj2clss.eating();
obj2clss.eating("vaquejada");