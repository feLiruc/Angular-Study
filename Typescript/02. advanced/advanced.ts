class person {
	// private   id:		  number;
	// private   firstName:  string;
	// private   lastName:   string;
	// private   eyeColor:   string;
	// public    hairColor:  string;
	// protected age:		  number;

	static static_field:string = "Hello static world!";

	static return_text() {
		console.log("Ola um texto estático");
	}

	constructor(private id:number,
		private firstName:string,
		private lastName:string,
		private eyeColor?:string,
		public hairColor?:string,
		protected age?:number
	){
		// this.id = ID;
		// this.firstName = firstname;
		// this.lastName = lastname;
		// this.eyeColor = eyecolor;
		// this.hairColor = haircolor;
		// this.age = AGE;
	}

	doAction(){};
	getName(){
		console.log("My name is " + this.firstName + " " + this.lastName + "!!!");
	};

	getAllData(){
		var toPrint = `========= Start of all data =========\n`;
		toPrint    += `		      id: ${this.id}\n`;
		toPrint	   += `    firstName: ${this.firstName}\n`;
		toPrint	   += `     lastName: ${this.lastName ? this.lastName : "No Last Name"}\n`;
		toPrint    += `     eyeColor: ${this.eyeColor ? this.eyeColor : "No Eye Color"}\n`;
		toPrint    += `    hairColor: ${this.hairColor ? this.hairColor : "No Hair Color"}\n`;
		toPrint    += `          age: ${this.age ? this.age : "No Age"}\n`;
		toPrint    += `========== End of all data ==========`;
		console.log(toPrint);
	}

}

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

class class1 {
	field1: string;
	field2: string;
	constructor(field1:string,field2:string){
		this.field1 = field1;
		this.field2 = field2;
	}
}

class class2 extends class1{
	field3:string;
	constructor(field3:string,field1:string,field2:string){
		super(field1, field2);
		this.field3 = field3;
	}
}

var obj1 = new class1("hello", "world");
var obj2 = new class2("Olá", "Mundo", "Meu");

console.log(obj1);
console.log(obj2);