// ----------FOR LOOP-----------
/*for(let i = 1;i<10;i++)
{
    console.log(i);
}
*/

// -----------WHILE LOOP----------
/*let j = 0;
while (j<10) {
    console.log(j+1);
    j++;
}
*/

// ------------DO-WHILE LOOP-------
/*let k = 0;
do{
    console.log(k+1);
    k++;
}while (k<10);
*/

// -------------BREAK STATEMENT--------
/*let i=0;
do{
    console.log(i+1);
    if(i==5)
        break;
    i++;
}while(i<10);
console.log('bye');
*/

// -------------CONTINUE STATEMENT------------
let i=0;
while (i<10) {
    if(i==5)
        continue;
    console.log(i+1);
    i++;
}