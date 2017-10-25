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
















/* ֆունկցիաների հայտարարման տարածք */
//Կանչերի օրինակներ
//drawTriangle(-200,-220,60,1,90);
//drawSquare(50,50,200,5,45);
//drawCircle(0,0,200,1);

function drawTriangle(x,y,h,w,a){
    angle(a);
    goto(x,y);
    width(w);
    for(var i=0; i<3; i++){
        forward(h);
        left(120);
    }
}

function drawPentagon(x,y,h,w,a){
    angle(a);
    goto(x,y);
    width(w);
    for(var i=0; i<5; i++){
        forward(h);
        left(72);
    }
}

function drawCircle(x,y,r,w){
    goto(x,y);
    for(var i=0; i<720; i++){
        penup();
        forward(r);
        pendown();
        forward(w);
        goto(x,y);
        left(0.5);
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


function drawLine(lenght,pl){
    var count = parseInt(lenght/pl); //քայլերի քանակը
    var rem = lenght%pl;             //մնացորդը, ամբողջ lenght֊ը վերջում լրացնելու համար
    var clr = [];
    for(var i = 0; i<count; i++){
        clr = randomArrInt(3,0,255);
        colour(clr[0],clr[1],clr[2])
        forward(pl);
    }

    forward(rem); //լրացնում ենք գիծը մնացորդով
}