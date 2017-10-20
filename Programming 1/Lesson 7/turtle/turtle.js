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
drawTriangle(x,y,h,w,a) //գծել եռանկյուն (x,y,երկարություն, հաստություն, անկյուն);
drawSquare(x,y,h,w,a) //գծել քառակուսի (x,y,երկարություն, հաստություն, անկյուն);
randomInt(min,max);  //վերադարձնում է պատահական ամբողջ թիվ (min,max) միջակայքից
randomArrInt(c,min,max);  //վերադարձնում է պատահական թվերով լցված զանգված (քանակ, մինիմալ, մաքսիմալ)
*/


/* ----- ֆունկցիաների կիրառման տարածքը, կամ հիմնական ծրագիրը ----*/
//գրիրի՛ ֆունկցիաների կանչերը այստեղ

/*--- end 0f  ֆունկցիաների կիրառման տարածքը, կամ հիմնական ծրագիրը ---*/









/* ֆունկցիաների հայտարարման տարածք */
//drawTriangle(x,y,h,w,a)
//drawTriangle(100,200,120,2,175);
//drawTriangle(-200,-220,60,1,90);
//drawSquare(50,50,200,5,45);
function drawTriangle(x,y,h,w,a){
    angle(a);
    goto(x,y);
    width(w);
    for(var i=0; i<3; i++){
        forward(h);
        left(120);
    }
}

function drawSquare(x,y,h,w,a){
    angle(a);
    goto(x,y);
    width(w);
    for(var i=0; i<4; i++){
        forward(h);
        left(90);
    }
}

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


/* end of ֆունկցիաների հայտարարման տարածք */