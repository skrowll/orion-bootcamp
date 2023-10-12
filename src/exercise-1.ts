// Exercício 1 - Item a) Função que retorne a quantidade de vogais da palavra passada via parâmetro da função.

/**
 * Conta o número de vogais em uma palavra.
 *
 * @remarks
 * Esta função conta o número de vogais [a, e, i, o, u] em uma palavra e o retorna.
 * Se a string estiver vazia, a função retorna 0 e exibe uma mensagem informando.
 * 
 * @param word - A palavra da qual você deseja contar as vogais.
 * @returns - O número de vogais na palavra.
 *
 * @example
 * const palavra = "Orion";
 * const quantidadeVogais = countVowels(palavra);
 * O resultado será 3.
 */

function countVowels(word: string): number{
  const wordLowerCase = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const accentedVowelA = ['á', 'à', 'ã', 'â', 'ä'];
  const accentedVowelE = ['é', 'è', 'ẽ', 'ê', 'ë'];
  const accentedVowelI = ['í', 'ì', 'ĩ', 'î', 'ï'];
  const accentedVowelO = ['ó', 'ò', 'õ', 'ô', 'ö'];
  const accentedVowelU = ['ú', 'ù', 'ũ', 'û', 'ü'];
  vowels.push(...accentedVowelA, ...accentedVowelE, ...accentedVowelI, ...accentedVowelO, ...accentedVowelU);
  let sumResult = 0;

  if (word === '') {
    return 0;
  }
  
  for (const letter of wordLowerCase) {
    if (vowels.includes(letter)) {    
      sumResult += 1;
    }    
  }

  return sumResult;
};

// Exercício 1 - Item b) Função que retorne a quantidade de vogais da palavra passada via input no formulário.

const wordInput = document.querySelector('#word-input') as HTMLInputElement;
const countButton = document.querySelector('#count-button') as HTMLButtonElement;
const result = document.querySelector('#vowel-count') as HTMLParagraphElement;
const formVowelCounter = document.querySelector('#vowel-counter') as HTMLFormElement;

formVowelCounter.onsubmit = (event: SubmitEvent) => {
  event.preventDefault();
  result.innerText = '';
  if (wordInput.value === '') {
    result.innerText = 'Digite uma palavra';
  } else {
    const sumResult = countVowels((wordInput.value).toString());
    result.innerText = `A palavra '${wordInput.value}' contém ${sumResult} vogais`;
  }
  wordInput.value = '';
};
