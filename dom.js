let a = document;

// a=document.all;
// a=document.body;
// a=document.forms;

// Array.from(a).forEach(function(element){
//     console.log(element);
// })

// a=document.links[0].href;

// a=document.images;

// console.log(a);

// 1.-----------SINGLE ELEMENET SELECTOR------------
let element = document.getElementById('my class');
// element=element.className;
// element=element.childNodes;
// element=element.parentNode;
element.style.color='red';
element.innerText="Harry is a boy";
element.innerHTML='<b> HI Everyone </b>';
// console.log(element);
console.log(element.innerText);

let sel=document.querySelector('#my class');
sel=document.querySelector('div');
sel.style.color='green';
console.log(sel);

// 2.-----------MULTI ELEMENT SELECTOR----------
let elems=document.getElementsByClassName('id');
elems=document.getElementsByClassName('container');
elems=document.getElementsByTagName('div');
console.log(elems);

for(let index=0;index<elems.length;index++)
{
    const element=elems[index];
    element.style.color='blue';
    console.log(element);
}


// ------------CREATE ELEMENT-------------
let ele = document.createElement('ui');
ele.className = 'classui';
ele.id = 'createli';
ele.setAttribute('title','mytitle');
console.log(ele);