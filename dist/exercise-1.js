"use strict";
function countVowels(word) {
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
}
;
const wordInput = document.querySelector('#word-input');
const countButton = document.querySelector('#count-button');
const result = document.querySelector('#vowel-count');
const formVowelCounter = document.querySelector('#vowel-counter');
formVowelCounter.onsubmit = (event) => {
    event.preventDefault();
    result.innerText = '';
    if (wordInput.value === '') {
        result.innerText = 'Digite uma palavra';
    }
    else {
        const sumResult = countVowels((wordInput.value).toString());
        result.innerText = `A palavra '${wordInput.value}' contém ${sumResult} vogais`;
    }
    wordInput.value = '';
};
