let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27;
    const result = a * b;
    return result;
}
// console.log(num1);
const output = multiply(num1, num2);
// console.log(output);


let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'}


function makeMovie(couple1, couple2){
    couple1.name = 'ononto';
    couple2.partner = 'mim';
}
console.log(student1, student2);
console.log(student1, student2);

makeMovie(student1, student2);

console.log(student1, student2);
console.log(student1, student2);

// primitive type ar khetre variable ar man ke jodi function ar vitore change kori tahole bahire man change ba main je man seta change hobe na. kintu non primitive ar khetre jodi ami function ar vitore kono value change kori tahole bahire and main variable ar value change hoye jabe. karon object and array are passed by reference. ar onno dike primive tyoes are passed by value.