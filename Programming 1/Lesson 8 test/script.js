

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