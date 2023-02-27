// thuthy : 1. true, 2. any numbeer(+ve, -ve) will be truthy other than 0; 3. any string will be truthy other than empty string, 4. '0' will be truthy, 5. {} empty object holo truthy value,6. [] empty array holeo truthy value hobe.


// falsy: 1. false, 2. 0, 3. '' empty string will be falsy, 4. undefined hole falsy hobe, 5. null hole falsy hobe,


// const x = false;
let x = null;
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}

// check falsy
const y = null;
if (!y){
    console.log('value is falsy')
}

// check truthy
const z = ' ';
if(!!z){
    console.log('value is truthy');
}

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/shawon012/lesson-37.git
// git push -u origin main