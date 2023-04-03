'use strict';

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isCheked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

    checkbox.addEventListener('change',() => {
        localStorage.setItem('isCheked', true);
    });

    change.addEventListener('click', () => {
        if (localStorage.getItem('bg') === 'changed') {
            localStorage.removeItem('bg');
            form.style.backgroundColor = '#fff';
        } else {
            localStorage.setItem('bg', 'changed');
            form.style.backgroundColor = 'red';
        }
    });

const persone = {
    name: 'Andy',
    age: 30
};

const serializedPerson = JSON.stringify(persone);
localStorage.setItem('andy', serializedPerson);

console.log(JSON.parse(localStorage.getItem('andy')));

