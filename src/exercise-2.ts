import * as fs from "fs";
import IPerson from "./interfaces/IPerson.inteface";

function readData() {
  const data = fs.readFileSync('src/database/database.json');
  return JSON.parse(data.toString());
};

function writeData(data: IPerson[]) {
  const jsonData = JSON.stringify(data);
  fs.writeFileSync('src/database/database.json', jsonData);
};

let lista: IPerson[] = readData();

// Exercício 2 - Item a) Função que retorne a bio do id passado.

// Functional Paradigm

function getBioByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.bio : 'Id não encontrado';
};

// console.log(getBioByIdFunctional(2));

// Imperative Paradigm

function getBioByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].bio;
    }
  }
  return 'Id não encontrado';
};

// console.log(getBioByIdImperative(2));

// Exercício 2 - Item b) Função que retorne o name do id passado.

// Functional Paradigm

function getNameByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.name : 'Id não encontrado';
};

// console.log(getNameByIdFunctional(1));

// Imperative Paradigm

function getNameByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].name;
    }
  }
  return 'Id não encontrado';
}

// console.log(getNameByIdImperative(1));

// Exercício 2 - Item c) Função que apague um item da lista a partir de um id passado

// Functional Paradigm

function deleteByIdFunctional(id: number): number {
  const person = lista.find((person) => person.id === id);
  if (person) {
    const newLista = lista.filter((person) => person.id !== id)
    lista = newLista;
    // writeData(newLista)
    return 1;
  };
  return 0;
};

// console.log(deleteByIdFunctional(5));

// Imperative Paradigm

function deleteByIdImperative(id: number): number {
  let person = [];
  let newLista = [];
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      person.push(lista[index]);
    }
  }
  if (person.length > 0) {
    for (let index = 0; index < lista.length; index += 1) {
      if (lista[index].id !== id) {
        newLista.push(lista[index]);
      }
    }
    lista = newLista;
    return 1;
  }
  return 0;
}

// console.log(deleteByIdImperative(1));
