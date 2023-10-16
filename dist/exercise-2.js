let lista = [
    {
        "id": 1,
        "name": "Ada Lovelace",
        "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"
    },
    {
        "id": 2,
        "name": "Alan Turing",
        "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"
    },
    {
        "id": 3,
        "name": "Nikola Tesla",
        "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."
    },
    {
        "id": 4,
        "name": "Nicolau Copérnico",
        "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."
    }
];
export function getBioByIdFunctional(id) {
    const person = lista.find((person) => person.id === id);
    return person ? person.bio : "Id não encontrado";
}
function getBioByIdImperative(id) {
    for (let index = 0; index < lista.length; index += 1) {
        if (lista[index].id === id) {
            return lista[index].bio;
        }
    }
    return "Id não encontrado";
}
export function getNameByIdFunctional(id) {
    const person = lista.find((person) => person.id === id);
    return person ? person.name : "Id não encontrado";
}
function getNameByIdImperative(id) {
    for (let index = 0; index < lista.length; index += 1) {
        if (lista[index].id === id) {
            return lista[index].name;
        }
    }
    return "Id não encontrado";
}
export function deleteByIdFunctional(id) {
    const person = lista.find((person) => person.id === id);
    if (person) {
        const newLista = lista.filter((person) => person.id !== id);
        lista = newLista;
        return lista;
    }
    return "Não foi possivel deletar o dado com o id informado";
}
function deleteByIdImperative(id) {
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
        return "Dado deletado com sucesso";
    }
    return "Não foi possivel deletar o dado com o id informado";
}
export function updateByIdFunctional(id, name, bio) {
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
        return lista[id - 1];
    }
    return "Não foi possivel atualizar o dado com o id informado";
}
function updateByIdImperative(id, name, bio) {
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
            }
            else {
                newLista.push({ id, name, bio });
            }
        }
        lista = newLista;
        return "Dado atualizado com sucesso";
    }
    return "Não foi possivel atualizar o dado com o id informado";
}
