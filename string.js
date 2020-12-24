console.log(`More on Strings`);
const name = ` Harry`;
const greeting = `Good Morning`;
console.log(greeting + name);

let html;
html = "<h1> This is a heading </h1> "+ " <p1> This is a paragraph </p1>";
html = html.concat(' This '+ 'is');
console.log(html);

console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());

console.log(html[5]);
console.log(html.indexOf('this'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt('heading'));
console.log(html.endsWith('</h1>'));
console.log(html.endsWith('is'));
console.log(html.includes('a'));
console.log(html.includes('hahf'));
console.log(html.substring(1,6));
console.log(html.slice(0,4));
console.log(html.split('>'));
console.log(html.replace('This' , 'sakshi'));

let fruit1 = `Orange`;
let fruit2 = `Apple`;
let myhtml = `Hello ${name} <h1> Hello Everyone</h1>
<p> It's a lovely morning<br>
You like ${fruit1} and ${fruit2}`;


document.body.innerHTML = myhtml;


// ---------------ARRAYS AND OBJECTS--------
marks = [34,25,98,75,12,65];
const fruits = ['orange','mango','banana'];
const mixed = ['str',65,35,[1,2]];
const arr = new Array(21,32,54,'papaya');
console.log(arr);
console.log(mixed);
console.log(arr.length);
console.log(Array.isArray('sgdgsd'));

arr[0] = 'sakshi';
let array1 = arr[0];
console.log('element : ', array1);

// ----------MUTATING AND MODIFYING------------
marks.push(33333);
console.log(marks);

marks.unshift(10009);
console.log(marks);

marks.pop()
console.log(marks);

marks.shift()
console.log(marks);

marks.slice(1,3)
console.log(marks);

marks.reverse()
console.log(marks);

let marks2 = [1,2,3,4];
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    'firstname' : 'Sakshi',
    'lastname' : 'verma',
    'phone_no' : 95874
}
console.log(myobj);
console.log(myobj['lastname']);
console.log(myobj.lastname);

// ----------------IF-ELSE STATEMENT-----------
let age = 14;
// if(age<18)
//     console.log("You are underage");
// else
//     console.log("You are eligible");

// console.log(age<50 ? "You are underage" : "You are eligible")

switch (age) {
    case 14:
        console.log("You are 14");
        break;
    case 28:
        console.log("You are 28");
        break;
    case 38:
        console.log("You are 38");
        break;
    case 48:
        console.log("You are 48");
        break;

    default:
        console.log("You are unknown");
        break;
}