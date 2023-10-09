// Exercício 1 - Item a) Função que retorne a quantidade de vogais da palavra passada via parâmetro da função.

function countVowels(word: string): number{
  word = word.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let sumResult = 0;

  if (word === '') {
    console.log('A string passada como parâmetro está vazia');
    return 0;
  }
  
  for (const letter of word) {
    if (vowels.includes(letter)) {    
      sumResult += 1;
    }    
  }

  console.log(`A palavra '${word}' contém ${sumResult} vogais`);
  return sumResult;
};

countVowels('Orion Bootcamp');

// Exercício 1 - Item b) Função que retorne a quantidade de vogais da palavra passada via input no formulário.

const input = document.querySelector('#input') as HTMLInputElement;
const button = document.querySelector('#button') as HTMLButtonElement;
const result = document.querySelector('#result') as HTMLParagraphElement;

button.onclick = () => {
  result.innerText = '';
  if (input.value === '') {
    result.innerText = `Digite uma palavra`;
  } else {
    const sumResult = countVowels((input.value).toString());
    result.innerText = `A palavra '${input.value}' contém ${sumResult} vogais`;
  }
  input.value = '';
}
