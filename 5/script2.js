print5();
print10();
for (var i = 0; i < 5; i++){
    // console.log(i);
}
// console.log('outside', i);

function print5(){
    console.log('inside print5', 5);
}

const print10 = function(){
    console.log('inside print 10', 10);
}

// var print11 = function(){
//     console.log('inside print', 11);
// }
// akhane var diye function ke declare kora jabe na. korle var sudhu tar pasher jinidhtuku upore niye jabe and function execute hobe na.