"use strict";
// Generics
const adduid = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let mydoc = adduid({ name: 'mimoza', gender: 'femele', age: 39 });
console.log(mydoc.name);
const docTwo = {
    id: 1,
    resourceName: 'person',
    data: { name: 'jelson j', gender: 'male', age: 85 }
};
const docTree = {
    id: 5,
    resourceName: 'shoppingList',
    data: ['honey', 'sugar', 'coffee', 'tea', 'cake', 'bread']
};
console.log(docTree);
