let item = ['red','green','blue'];

// 1. --------LOCAL STORAGE-------------

// setItem adds a key-value pair inside local storage.

localStorage.setItem('Name' , 'Sakshi');
localStorage.setItem('Name1' , 'Swati');
localStorage.setItem('Name2' , 'Sunita');
localStorage.setItem('colours' , JSON.stringify(item))

//getItem retrives an item from the local storage.

let name = localStorage.getItem('Name');
let name1 = localStorage.getItem('Name1');
let name2 = localStorage.getItem('Name2');
console.log(name);
console.log(name1);
console.log(name2);

name = JSON.parse(localStorage.getItem('colours'));
console.log(name);

// clears
// localStorage.clear()

// 2. ---------SESSION STORAGE----------
sessionStorage.setItem('Name' , 'Sakshi');
sessionStorage.setItem('Name1' , 'Swati');
sessionStorage.setItem('Name2' , 'Sunita');

// sessionStorage.clear();