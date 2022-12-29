console.log ("clousers")
function outerfunc(){
    var a= 20;
  return  function innerfunc1(){      //we can return.
        let b= 10;
     return   function insideinner(){ //we can return.
            console.log(a,b)
        }
        // insideinner(); //if we don't want to use 
        // return function then we have to call inside 
        // the function
    }
    // innerfunc1();      //if we don't want to use 
    // return function then we have to call inside the 
    // function.
}
outerfunc()()();   //(ans:20 and 10)
// in case of no return outerfunc();


// q1
function counter(){
    var counter=0;
    function increaseCounter(){
        return counter+=1;
    };
    return increaseCounter;
}
 var counter = counter(); 
//we are calling inner function 
// so line no.18 making clouser after that it never goes 
// to line no.18 so every time it is increasing.
alert(counter());//1
alert(counter());//2
alert(counter());//3
alert(counter());//4

// q2
let count2 = 0;
(function(){
    if(count2===0){
        let count2=1;
        console.log(count2)//1
    }
    console.log(count2)//0
})();

// q3
for(var i=0;i<3;i++){//in case of let it will print 0,1,2
    setTimeout(function log(){
        console.log(i);//in case of var print 3 three times.
    },1000);
}

// q4
function param(){
    let A,w=10,l=20;
    return function areaOfRectangle(){   
        console.log (A=w*l);
    }
}
param()();

// q5 ans:- take a variable counter in outer function and 
// increase the the counter in inner function in js is 
// called  CLOSURES.

// q6
var a6=12;
(function(){
    alert(a6);
})();

// q7 
var a7=10;
var x = (function(){
    var a7=14;
    return function(){
        alert(a7);
    };
})();
x();

// q8
var globalVar="xyz";
(function outerfunc8(outerArg){
    var outerVar="a";
    (function innerfunc8(innerArg){
        var innerVar="b";

        console.log(
            "outerArg="+outerArg+"\n"+//123
            "innerArg="+innerArg+"\n"+//456
            "outerVar="+outerVar+"\n"+//a
            "innerVar="+innerVar+"\n"+//b
            "globalVar="+globalVar+"\n"//xyz
            );


    })(456);
})(123);