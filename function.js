function greet(name,thank) {
    console.log(`Happy birthday! ${name} Sending you smiles for every moment of your special day…Have a wonderful time and a very happy birthday! Hope your special day brings you all that your heart desires! Here's wishing you a day full of pleasant surprises! Happy birthday! ${thank}`)
}
let name = 'Sakshi';
let thank = 'Thank you so much';

greet(name,thank);

let obj = {
    skill : "Skills",
    game : function () {
        return "GTA";
    }
}
console.log(obj.game());


let arr = ['apple','banana','pear'];
arr.forEach(function (element,index,array) {
    console.log(element,index);
})