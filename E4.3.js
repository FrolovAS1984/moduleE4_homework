//Задание 1. Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

const obj1 = {
    first_name: 'Anton'
}

const obj2 = Object.create(obj1);
obj2.second_name = 'Frolov';


printOwnProperties(obj1)
printOwnProperties(obj2)


//Задание 2. Написать функцию, которая принимает в качестве аргументов строку
// и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать
// true или false.

function checkPropertyExistence(propertyName, obj) {
    return propertyName in obj;
}

const obj3 ={
    name: 'Anton'
}

console.log(checkPropertyExistence('name', obj3));

// Задание 3. Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObject() {
    return Object.create(null);
}
const obj4 = createEmptyObject();
console.log(obj4);