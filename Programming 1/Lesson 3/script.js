var a = prompt("I թիվը");
var op = prompt("ներմուծիր գործող․");
var b = prompt("II թիվը");

a = parseFloat(a);
b = parseFloat(b);

//արժե նաև ստուգել, 
//արդյո՞ք a-ն և b-ն թվային տիպի են
if(op == "+"){
    console.log(a+b);
}
else if(op == "-"){
    console.log(a-b);
}
else if(op == "*"){
    console.log(a*b);
}
else if(op == "/" && b!=0){
    console.log(a/b);
}
else if(op == "/" && b==0){
    console.log("0-ի վրա չենք բաժանում");
}
else{
    console.log("սխալ օպերատոր");
}


