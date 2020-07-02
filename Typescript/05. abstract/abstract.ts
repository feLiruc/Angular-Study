abstract class Person {
	name: string;
	abstract eyeColor: string;

	constructor(name: string){
		this.name = name;
	}

	f1(){
		console.log("O nome dessa pessoa é: " + this.name);
	}

	abstract f2();
}

class Person1 extends Person {

	age: number;
	eyeColor: string;

	constructor(name: string, age: number, eyeColor?: string){
		super(name);
		this.age = age;
		this.eyeColor = eyeColor;
	}

	f1(){
		console.log("O nome dessa pessoa é: " + this.name + " e tem " + this.age + " anos.");
		console.log("E lembrei, ele tem olhos de cor "+ this.eyeColor + ".");
	}

	f2(){
		console.log("f2 foi chamada");
	}

}

//var p1 = new Person("Sr. Marinho");
var p1 = new Person1("Sr. Marinho", 29, "castanho");


p1.f1();
p1.f2();