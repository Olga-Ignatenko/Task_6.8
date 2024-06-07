
const greenCircle = document.querySelector('.green');
const yellowCircle = document.querySelector('.yellow');
const redCircle = document.querySelector('.red');



let currentColor = 'red';

function changeColor() {
    switch (currentColor) {
        case 'green':
            greenCircle.classList.remove('green');
            redCircle.classList.add('red');
            currentColor = 'red';
            break;
        case 'yellow':
            yellowCircle.classList.remove('yellow');
            greenCircle.classList.add('green');
            currentColor = 'green';
            break;
        case 'red':
            redCircle.classList.remove('red');
            yellowCircle.classList.add('yellow');
            currentColor = 'yellow';
            break;
        
        
    }
    greenCircle.classList.toggle('black', currentColor !== 'green');
    yellowCircle.classList.toggle('black', currentColor !== 'yellow');  
    redCircle.classList.toggle('black', currentColor !== 'red');
    
    
}

greenCircle.addEventListener('click', changeColor);
yellowCircle.addEventListener('click', changeColor);
redCircle.addEventListener('click', changeColor);

