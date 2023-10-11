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

/**
 * Retorna a bio do objeto com o ID correspondente.
*
* @param id - O ID do objeto a ser procurado.
* @returns A bio do objeto ou uma mensagem de erro se o ID não for encontrado.
*/

// Functional Paradigm

function getBioByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.bio : 'Id não encontrado';
};

// Imperative Paradigm

function getBioByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].bio;
    }
  }
  return 'Id não encontrado';
};

// Exercício 2 - Item b) Função que retorne o name do id passado.

/**
 * Retorna o nome do objeto com o ID correspondente.
 *
 * @param id - O ID do objeto a ser procurado.
 * @returns O nome do objeto ou uma mensagem de erro se o ID não for encontrado.
 */

// Functional Paradigm

function getNameByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.name : 'Id não encontrado';
};

// Imperative Paradigm

function getNameByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].name;
    }
  }
  return 'Id não encontrado';
}

// Exercício 2 - Item c) Função que apague um item da lista a partir de um id passado

/**
 * Deleta o objeto com o ID correspondente da lista.
 *
 * @param id - O ID do objeto a ser deletado.
 * @returns Uma mensagem de sucesso ou erro.
 */

// Functional Paradigm

function deleteByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  if (person) {
    const newLista = lista.filter((person) => person.id !== id)
    lista = newLista;
    // writeData(newLista)
    return 'Dado deletado com sucesso';
  };
  return 'Não foi possivel deletar o dado com o id informado';
};

// Imperative Paradigm

function deleteByIdImperative(id: number): string {
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
    // writeData(newLista)
    return 'Dado deletado com sucesso';
  }
  return 'Não foi possivel deletar o dado com o id informado';
};

// Exercício 2 - Item d) Função que altere a bio ou o name a partir de um id passado

/**
 * Atualiza o objeto com o ID correspondente com novos valores.
 *
 * @param id - O ID do objeto a ser atualizado.
 * @param name - O novo nome a ser atribuído ao objeto.
 * @param bio - A nova bio a ser atribuída ao objeto.
 * @returns Uma mensagem de sucesso ou erro.
 */

// Functional Paradigm

function updateByIdFunctional(id: number, name: string, bio: string): string {
  if (!id || id < 1 || !name || name === '' || !bio || bio === '') {
    return 'Todos os parâmetros devem ser preenchidos corretamente';
  };
  const person = lista.find((person) => person.id === id);
  if (person) {
    const newLista = lista.map((person) => {
      if (person.id === id) {
        return { id, name, bio }
      }
      return person;
    })
    lista = newLista;
    // writeData(newLista)    
    return 'Dado atualizado com sucesso';
  };
  return 'Não foi possivel atualizar o dado com o id informado';
};

// Imperative Paradigm

function updateByIdImperative(id: number, name: string, bio: string): string {
  if (!id || id < 1 || !name || name === '' || !bio || bio === '') {
    return 'Todos os parâmetros devem ser preenchidos corretamente';
  };
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
      } else {
        newLista.push({ id, name, bio });
      }
    }
    lista = newLista;
    return 'Dado atualizado com sucesso';
  }
  return 'Não foi possivel atualizar o dado com o id informado';
};
