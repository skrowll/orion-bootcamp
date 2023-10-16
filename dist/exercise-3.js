import { getBioByIdFunctional, getNameByIdFunctional, updateByIdFunctional, deleteByIdFunctional } from "./exercise-2.js";
const searchBioInput = document.querySelector('#search-bio');
const searchBioButton = document.querySelector('#search-bio-button');
const searchNameInput = document.querySelector('#search-name');
const searchNameButton = document.querySelector('#search-name-button');
const updateIdInput = document.querySelector('#update-id');
const updateNameInput = document.querySelector('#update-name');
const updateBioInput = document.querySelector('#update-bio');
const updateButton = document.querySelector('#update-button');
const deleteIdInput = document.querySelector('#delete-id');
const deleteButton = document.querySelector('#delete-button');
searchBioButton === null || searchBioButton === void 0 ? void 0 : searchBioButton.addEventListener('click', () => {
    if (searchBioInput.value) {
        const result = getBioByIdFunctional(Number(searchBioInput.value));
        console.log(result);
    }
});
searchNameButton === null || searchNameButton === void 0 ? void 0 : searchNameButton.addEventListener('click', () => {
    if (searchNameInput.value) {
        const result = getNameByIdFunctional(Number(searchNameInput.value));
        console.log(result);
    }
});
updateIdInput === null || updateIdInput === void 0 ? void 0 : updateIdInput.addEventListener('change', () => {
    if (updateIdInput.value) {
        const name = getNameByIdFunctional(Number(updateIdInput.value));
        const bio = getBioByIdFunctional(Number(updateIdInput.value));
        updateNameInput.value = name;
        updateBioInput.value = bio;
        if (name !== 'Id não encontrado' && bio !== 'Id não encontrado') {
            updateButton.disabled = false;
        }
        else {
            updateButton.disabled = true;
        }
    }
});
updateButton === null || updateButton === void 0 ? void 0 : updateButton.addEventListener('click', () => {
    const result = updateByIdFunctional(Number(updateIdInput.value), updateNameInput.value, updateBioInput.value);
    console.log(result);
});
deleteIdInput === null || deleteIdInput === void 0 ? void 0 : deleteIdInput.addEventListener('change', () => {
    if (deleteIdInput.value) {
        const name = getNameByIdFunctional(Number(deleteIdInput.value));
        updateNameInput.value = name;
        if (name !== 'Id não encontrado') {
            deleteButton.disabled = false;
        }
        else {
            deleteButton.disabled = true;
        }
    }
});
deleteButton === null || deleteButton === void 0 ? void 0 : deleteButton.addEventListener('click', () => {
    if (deleteIdInput.value) {
        const result = deleteByIdFunctional(Number(deleteIdInput.value));
        console.log(result);
    }
});
