/*
Exercise 1

You have to create a variable which is a string containing a text which is a link you are interested in.

You have to fetch all the links from a given page which contains this text.
*/

let str = 'javascript';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function (element) {
    href=element.href;
    if(href.includes(str))
        console.log(href);    
})