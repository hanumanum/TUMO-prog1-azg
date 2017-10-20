/* ֆունկցիաների կիրառման տարածքը, 
կամ հիմնական ծրագիրը */
var a = power(100,5);
var b = power(3,3);
var c = power(2,8);
var z = power(10,10);
console.log(a,b,c,z);

var r1 = randomInt(100,200);
var r2 = randomInt(0,360);
var r3 = randomInt(0,5);
console.log(r1,r2,r3);

var rndArr = randomArrInt(5,10,200);
var rndArr1 = randomArrInt(15,0,360);
console.log(rndArr);
console.log(rndArr1);


/* ֆունկցիաների հայտարարման տարածքը */
function randomArrInt(c,min,max){
    var d = [];
    for(var i=0; i<c; i++){
        var t = randomInt(min,max);
        d.push(t);
    }
    return d;
}

function randomInt(min,max){
    var z = Math.floor(Math.random()*(max-min+1))+min;
    return z;
}


function power(base,exp){
    var res = 1;
    for(var i=1; i<=exp; i++){
        res*=base;
    }
    return res;
}