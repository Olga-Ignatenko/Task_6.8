const inputField = document.getElementById('inputField');
const duplicateField = document.getElementById('duplicateField');
const myForm = document.getElementById('myForm');

inputField.addEventListener('input', () => {
  
  duplicateField.textContent = inputField.value;
});


myForm.addEventListener('submit', (event) => {
  
  event.preventDefault();

  
  console.log(inputField.value);

  
  inputField.value = '';
  duplicateField.textContent = '';
});