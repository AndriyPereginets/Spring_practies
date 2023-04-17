'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    

    say() {
        console.log(`Ім'я користувача: ${this.name} вік: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Error');
        }
    }
}

const andriy = new User('Andriy', 27);
console.log(andriy.age);
andriy.age = 50;
andriy.name = 'Andy';

andriy.say();