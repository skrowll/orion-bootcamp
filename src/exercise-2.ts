import IPerson from "./interfaces/IPerson.inteface";

let lista: IPerson[] = [
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
]

// Exercício 2 - Item a) Função que retorne a bio do id passado.

/**
 * Retorna a bio do objeto com o ID correspondente.
 *
 * @param id - O ID do objeto a ser procurado.
 * @returns A bio do objeto ou uma mensagem de erro se o ID não for encontrado.
 */
export function getBioByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.bio : "Id não encontrado";
}

/**
 * Retorna a bio do objeto com o ID correspondente.
 *
 * @param id - O ID do objeto a ser procurado.
 * @returns A bio do objeto ou uma mensagem de erro se o ID não for encontrado.
 */
function getBioByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].bio;
    }
  }
  return "Id não encontrado";
}

// Exercício 2 - Item b) Função que retorne o name do id passado.

/**
 * Retorna o nome do objeto com o ID correspondente.
 *
 * @param id - O ID do objeto a ser procurado.
 * @returns O nome do objeto ou uma mensagem de erro se o ID não for encontrado.
 */
export function getNameByIdFunctional(id: number): string {
  const person = lista.find((person) => person.id === id);
  return person ? person.name : "Id não encontrado";
}

/**
 * Retorna o nome do objeto com o ID correspondente.
 *
 * @param id - O ID do objeto a ser procurado.
 * @returns O nome do objeto ou uma mensagem de erro se o ID não for encontrado.
 */
function getNameByIdImperative(id: number): string {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].id === id) {
      return lista[index].name;
    }
  }
  return "Id não encontrado";
}

// Exercício 2 - Item c) Função que apague um item da lista a partir de um id passado

/**
 * Deleta o objeto com o ID correspondente da lista.
 *
 * @param id - O ID do objeto a ser deletado.
 * @returns Uma nova lista sem o item excluído ou uma mensagem de erro.
 */
export function deleteByIdFunctional(id: number): string | IPerson[] {
  const person = lista.find((person) => person.id === id);
  if (person) {
    const newLista = lista.filter((person) => person.id !== id);
    lista = newLista;
    // writeData(newLista)
    return lista;
  }
  return "Não foi possivel deletar o dado com o id informado";
}

/**
 * Deleta o objeto com o ID correspondente da lista.
 *
 * @param id - O ID do objeto a ser deletado.
 * @returns Uma nova lista sem o item excluído ou uma mensagem de erro.
 */
function deleteByIdImperative(id: number): string | IPerson[] {
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
    return lista;
  }
  return "Não foi possivel deletar o dado com o id informado";
}

// Exercício 2 - Item d) Função que altere a bio ou o name a partir de um id passado

/**
 * Atualiza o objeto com o ID correspondente com novos valores.
 *
 * @param id - O ID do objeto a ser atualizado.
 * @param name - O novo nome a ser atribuído ao objeto.
 * @param bio - A nova bio a ser atribuída ao objeto.
 * @returns O objeto do item atualizado ou uma mensagem de erro.
 */
export function updateByIdFunctional(id: number, name: string, bio: string): string | IPerson {
  if (!id || id < 1 || !name || name === "" || !bio || bio === "") {
    return "Todos os parâmetros devem ser preenchidos corretamente";
  }
  const person = lista.find((person) => person.id === id);
  if (person) {
    const newLista = lista.map((person) => {
      if (person.id === id) {
        return { id, name, bio };
      }
      return person;
    });
    lista = newLista;
    // writeData(newLista)
    return lista[id - 1];
  }
  return "Não foi possivel atualizar o dado com o id informado";
}

/**
 * Atualiza o objeto com o ID correspondente com novos valores.
 *
 * @param id - O ID do objeto a ser atualizado.
 * @param name - O novo nome a ser atribuído ao objeto.
 * @param bio - A nova bio a ser atribuída ao objeto.
 * @returns O objeto do item atualizado ou uma mensagem de erro.
 */
function updateByIdImperative(id: number, name: string, bio: string): string | IPerson {
  if (!id || id < 1 || !name || name === "" || !bio || bio === "") {
    return "Todos os parâmetros devem ser preenchidos corretamente";
  }
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
    return lista[id -1];
  }
  return "Não foi possivel atualizar o dado com o id informado";
}
