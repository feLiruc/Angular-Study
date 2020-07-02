
interface Clinterface {
	name: string|number;
}

interface Clinterface2 {
	age: number
	func1();
}

class class1 implements Clinterface, Clinterface2 {
	constructor (public name:string|number,public age:number, public hairColor?:string){};
	
	func1(){
		console.log("This is FUNC1()");
	}
}

var obj1 = new class1("Felipe Israel Marinho", 29);

console.log(obj1);

obj1.func1();

var obj2:Clinterface = new class1("Allison Baldan", 21);