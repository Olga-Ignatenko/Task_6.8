const consolelog = document.querySelector('#consoleLog');

consolelog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})



const alerts = document.querySelector('#alert');

alerts.addEventListener('click', () => {
    alert('Служит для вывода информации в окне браузера');
})



const prompts = document.querySelector('#prompt');

prompts.addEventListener('click', () => {
    alert('используется для получения данных от пользователя на веб-странице');
})