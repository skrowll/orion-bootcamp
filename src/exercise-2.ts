let lista = [
  {
    "id" : 1,
    "name": "Ada Lovelace",
    "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
  },
  {
    "id" : 2,
    "name": "Alan Turing",
    "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
  },
  {
    "id" : 3,
    "name": "Nikola Tesla",
    "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
  },
  {
    "id" : 4,
    "name": "Nicolau Copérnico",
    "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
  }
];

// Exercício 2 - Item a) Função que retorne a bio do id passado.

// Functional Paradigm

function findBioByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.bio : 'Id não encontrado';
};

console.log(findBioByIdFunctional(2));

// Imperative Paradigm

function findBioByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].bio;
    }
  }
  return 'Id não encontrado';
}

console.log(findBioByIdImperative(2));

// Exercício 2 - Item b) Função que retorne o name do id passado.

// Functional Paradigm

function findNameByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.name : 'Id não encontrado';
};

console.log(findNameByIdFunctional(1));

// Imperative Paradigm

function findNameByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].name;
    }
  }
  return 'Id não encontrado';
}

console.log(findNameByIdImperative(1));
