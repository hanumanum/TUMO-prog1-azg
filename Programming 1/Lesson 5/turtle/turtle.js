/*
forward(distance)  //գնալ առաջ (հեռավորություն)
right(angle)            //աջ (անկյուն)
left(angle) 	     //ձախ (անկյուն)	
goto(x,y) 	     //գնա (x կորդինատ, y կորդինատ)
clear() 	                  //մաքրել
penup() 	    //բարձրացնել մատիտը
pendown() 	    //իջեցնել մատիտը
reset() 	                 //սկսել սկզբից, ջնջել ամեն ինչ ....
angle(angle)	   //անկյուն	 
width(width)       //մատիտի հաստությունը(հաստություն)
colour(r,g,b) 	   //ընտրել գույն()
*/

//մի՛ ջնջիր, պետք կգա ։)
/*
var n = 13;
var ank = 180-((n-2)/n)*180;
*/

/*
for(var i=300; i>0 ; i-=10){
    forward(i);
    left(90);
}
*/

/*
var arr = [191, 56, 152, 116, 220, 249, 177, 107, 233, 66, 180, 170, 200, 210, 68, 149, 96, 55, 52, 218, 109, 70, 201, 129, 159, 226, 133, 218, 155, 219, 182, 121, 218, 69, 245, 133, 165, 176, 51, 116, 84, 108, 208, 167, 181, 157, 134, 147, 92, 213, 170, 68, 91, 197, 53, 150, 60, 151, 130, 216, 146, 127, 243, 139, 213, 66, 66, 156, 51, 217, 227, 185, 71, 118, 214, 51, 105, 168, 242, 163, 62, 300,300,300];
*/

/*
var z = 0;
var arr = [];
var r = [];
var g = [];
var b = [];
var w = [];

for(var i=0; i<100; i++){
    z = Math.floor(Math.random()*250);
    arr.push(z);
    rc = Math.floor(Math.random()*250);
    r.push(rc);
    rg = Math.floor(Math.random()*250);
    g.push(rg);
    rb = Math.floor(Math.random()*250);
    b.push(rb);
    wc = Math.floor(Math.random()*5);
    w.push(wc);
}
console.log(arr);
console.log(r);
console.log(g);
console.log(b);


for(var i=0 ; i<arr.length ; i++){
    forward(arr[i]);
    goto(0,0);
    left(360/arr.length);
    colour(r[i],g[i],b[i]);
    width(w[i]);
}
*/


var eng = ["Variable","Declaration","Assignment","Data types","Number","String","Boolean","true","false","array","if","else","loop","for","while","iterator","continue","break"];

var arm = ["Փոփոխական","Հայտարարում","Վերագրում","Տվյալների տիպեր","Թվային տիպ","Տողային տիպ","Բուլյան տիպ","Ճշմարիտ","Կեղծ","Զանգված","Եթե","Հակառակ դեպքում","կրկնություն, հանգույց","համար","քանի դեռ","հաշվիչ","շարունակել","դադարեցնել"];

var w = prompt("ներմուծիր բառը");
for(var i=0; i<eng.length; i++){
    
    //console.log(eng[i]);
    
    if(w == eng[i]){
        console.log(arm[i]);
        break;
    }
}

if(i==eng.length){
    console.log("բառը չի գտնվել");
}




