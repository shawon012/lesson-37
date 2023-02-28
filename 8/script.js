// 37-8 (advanced) function arguments pass by reference pass by value


function sum(a, b, c){
    // console.log(typeof arguments);
    const args =[... arguments];
    console.log(args)
    const result = a + b + c;
    return result;
}
// console.log(arguments); akhane argument dile kaj korbe na. function ar vitore kaj korte hobe.
const total = sum(45, 89, 12, 45, 98, 56);
// argument holo array like object. and jehetu object tai chaileo push kora jabe na. array like object hoyate kichu kichu jinish kora jabe and kichu kichu jinish kora jabe na.
console.log(total);

console.log(typeof sum.length);
// sum.length sum function ar parametre bujhay