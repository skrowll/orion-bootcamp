import { getBioByIdFunctional, getNameByIdFunctional, updateByIdFunctional, deleteByIdFunctional } from "./exercise-2.js";

const searchBioInput = document.querySelector('#search-bio') as HTMLInputElement;
const searchBioButton = document.querySelector('#search-bio-button') as HTMLButtonElement;
const searchNameInput = document.querySelector('#search-name') as HTMLInputElement;
const searchNameButton = document.querySelector('#search-name-button') as HTMLButtonElement;
const updateIdInput = document.querySelector('#update-id') as HTMLInputElement;
const updateNameInput = document.querySelector('#update-name') as HTMLInputElement;
const updateBioInput = document.querySelector('#update-bio') as HTMLInputElement;
const updateButton = document.querySelector('#update-button') as HTMLButtonElement;
const deleteIdInput = document.querySelector('#delete-id') as HTMLInputElement;
const deleteButton = document.querySelector('#delete-button') as HTMLButtonElement;

searchBioButton?.addEventListener('click', () => {
  if (searchBioInput.value) {
    const result = getBioByIdFunctional(Number(searchBioInput.value));
    console.log(result);    
  }
});

searchNameButton?.addEventListener('click', () => {
  if (searchNameInput.value) {
    const result = getNameByIdFunctional(Number(searchNameInput.value));
    console.log(result);    
  }
})

updateIdInput?.addEventListener('change', () => {
  if (updateIdInput.value) {
    const name = getNameByIdFunctional(Number(updateIdInput.value));
    const bio = getBioByIdFunctional(Number(updateIdInput.value));
    updateNameInput.value = name;
    updateBioInput.value = bio;

    if (name !== 'Id não encontrado' && bio !== 'Id não encontrado') {
      updateButton.disabled = false;
    } else {
      updateButton.disabled = true;
    }
  }  
})

updateButton?.addEventListener('click', () => {
  const result = updateByIdFunctional(Number(updateIdInput.value), updateNameInput.value, updateBioInput.value);
  console.log(result);
})

deleteIdInput?.addEventListener('change', () => {
   if (deleteIdInput.value) {
    const name = getNameByIdFunctional(Number(deleteIdInput.value));
    updateNameInput.value = name;
    if (name !== 'Id não encontrado') {
      deleteButton.disabled = false;
    } else {
      deleteButton.disabled = true;
    }
  }  
})

deleteButton?.addEventListener('click', () => {  
  if (deleteIdInput.value) {
    const result = deleteByIdFunctional(Number(deleteIdInput.value));
    console.log(result);  
  }
})
