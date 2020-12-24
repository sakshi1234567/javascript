// 1.  -------------PRIMITIVE DATA TYPES--------------
// STRING
let name = "Sakshi";
console.log("My name is "+name);
console.log("Data type of string is "+(typeof name));

// NUMBERS
let marks = 93;
console.log("My marks are " +marks);
console.log("Data type of number is "+(typeof marks));

// BOOLEAN
let isdivide = true;
console.log("Data type of boolean is "+(typeof isdivide));

// NULL
let nullval = null;
console.log("Data type of null is "+(typeof nullval));

// UNDEFINED
let un = undefined;
console.log("Data type of undefined is "+(typeof un));



// 2.  -------------REFERENCE DATA TYPES--------------
// ARRAYS
let myarr = [34,14,15,87,54,65,"string","hello"]; 
console.log(myarr);
console.log("Data type of array is "+(typeof myarr));

// OBJECT LITERALS
let stmarks = {
    sakshi : 74,
    swati : 98,
    sunita : 87
}
console.log(stmarks);
console.log("Data type of object literals is "+(typeof stmarks));

// FUNCTIONS 
function findfun()
{

} 
console.log("Data type of function is  "+(typeof findfun));

// DATE
let date = new Date();
console.log("Data type of date is "+(typeof date));



//3. ------------------TYPE CONVERSION----------------
let char = "sakshi";
console.log(char, (typeof char));

let num = String(98);
console.log(num, (typeof num));

let booleanvar = String(true);
console.log(booleanvar, (typeof booleanvar));

let a = String([1,2,3,4,5,6]);
console.log(a,(typeof a));

let b = String(3245);
console.log(b, (typeof b));

b=parseFloat("32.5545");
console.log(b, (typeof b));

b=parseInt("32.5545");
console.log(b, (typeof b));
console.log(b.toFixed(3), (typeof b));

 b = 32.5545;
console.log(b, (typeof b));

let y = Number("60");
let z = 50;
console.log(y+z);