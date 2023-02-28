// 37-4 double equal (==) vs triple equal (===), implicit conversion

const first = 2;
const second = '2';
if(first === second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}

const firsta = 2;
const seconda = '2';
if(first == second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}

// comparison ar khetre 99 persent ar jonno === use korte hobe.


const firstd = 0;
const secondd = false;
if(first == second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}

// type coercion
// type conversion

const firste = {x: 5};
const seconde = {x: 5};
if(firste == seconde){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}
//    vjhgfhgvh

// always use ===
// equal comparison doesnot work for non-primitive