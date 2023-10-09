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

  console.log(`A palavra ${word} contém ${sumResult} vogais`);
  return sumResult;
};

countVowels('Orion Bootcamp');