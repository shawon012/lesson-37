// 8 ways to get undefine

// 1. variable that is not initialized will give undefined;

// let first;
// console.log(first);

// 2 function with no return
// let first;
// function second(a, b){
//     const total = a + b;
// }

// const result = second();
// console.log(result);

// 3. parameter that is not passed will be undefined
// function third(a, b, c, d){
//     const total = a + b + c + d;
//     console.log(a, b, c, d);
// }
// third(2, 5);


// if return has nothing on the right side will reutrn undefined;
// function noNegative(a, b){
//     if(a < 0 || b < 0){
//         return
//     }
//     return a + b;
// }
// const total = noNegative(2, -5);
// console.log(total);


// property that doesnot exist on an object will give you undefined;
// const fifth = {id: 2, name: 'ponchon', age: 40}
// console.log(fifth.age, fifth.salary);


// //6. accessing array elements outside of the index range
// const sixth = [4, 89, 87, 56, 54];
// console.log(sixth[1], sixth[5], sixth[200]);




// 7 deleting an element inside an array
// const sixth = [4, 89, 87, 56, 54];
// you should not do this instead of splice.
// delete sixth[1];
// console.log(sixth[1], sixth[5], sixth[200]);
// console.log(sixth);




//8. set a value directly to undefined;

const eighth = undefined;

const ninth = null;

const data = {results: [], updated: null}

// console.log(typeof undefined);
console.log(typeof null);