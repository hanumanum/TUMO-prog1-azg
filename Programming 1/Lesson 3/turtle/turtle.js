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
var n = prompt("ներմուծիր անկյունների քանակը");
var ank = 180-((n-2)/n)*180;
var a = prompt("ներմուծիր կողմը");

colour(84, 153, 199);
goto(121,-81);
if(n<=2){
    console.log(n+" անկյուն գոյություն չունի");
}
else if(n==3){
    forward(a);
    left(ank);
    forward(a);
    left(ank);
    forward(a);
}
else if(n==4){
    forward(a);
    left(ank);
    forward(a);
    left(ank);
    forward(a);
    left(ank);
    forward(a);
  
}
else if(n==5){
    forward(a);
    left(ank);
    forward(a);
    left(ank);
    forward(a);
    left(ank);
    forward(a);
    left(ank);
    forward(a);
}
else{
    console.log("ես չգիտեմ ինչպես գծել" + n + "-անկյուն");
    console.log("սովորեցրու ինձ :)");
}

