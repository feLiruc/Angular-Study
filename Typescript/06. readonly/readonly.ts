class Objeto {
	nome: string;
	readonly peso: number;

	constructor(nome: string, peso: number){
		this.nome = nome;
	}
}

var objeto1 = new Objeto("Mesa", 1);

console.log(objeto1);

objeto1.nome = "Cadeira";

console.log(objeto1);

objeto1.peso = 999;

interface IObjeto {
	nome: string;
	readonly peso: number;
}

var novoobjeto:IObjeto = {
	nome: "Novo Objeto",
	peso: 999
}

console.log(novoobjeto);

novoobjeto.nome = "Ulalalá";
// novoobjeto.peso = 123456;

console.log(novoobjeto);

var nobj2:Readonly<IObjeto> = {
	nome: "Rádio",
	peso: 66
}

// Erro, pois setamos a interface como Readonly
// nobj2.name = "Teste";