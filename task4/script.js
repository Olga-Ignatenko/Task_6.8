
const link = document.querySelector('a');


link.addEventListener('click', (event) => {
  
  event.preventDefault();

  const newText = prompt('Введите новый текст для ссылки:');

  link.textContent = newText;
});