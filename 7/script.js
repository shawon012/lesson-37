// 37-7 (optional) Callback function and pass different functions



function greeting(greetingHandler, name){
    (greetingHandler(name));
}
// const name = 'Halim Mama';
// const number = [45, 54, 78];
// const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'};
// greeting(laptop);


function greetingHandler(name){
    console.log('good morning', name)
}


function greetEvening(name){
    console.log('Good Evening', name)
}

function greetNight(name){
    console.log('Good Night', name);
}

greeting(greetingHandler, 'tom hans');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'tom solaiman');
greeting(greetEvening, 'tom salman');
greeting(greetEvening, 'tom amir');
greeting(greetNight, 'shawon');



function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);

// call back function

