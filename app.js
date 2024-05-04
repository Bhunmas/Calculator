// let runningTotal=0;
// let buffer="0";
// let previousOperation;


// const screen=document.querySelector(".screen");


// function buttonClick(value){
//     if(isNaN(value)){
//         handleSymbol(value);
//     }else{
//         handleNumber(value);
//     }
//     screen.innerText=buffer;
// }

// function handleSymbol(Symbol){
//     switch(Symbol){
//         case "C":
//             buffer="0";
//             runningTotal=0;
//             break;
//         case "=":
//             if(previousOperation==null){
//                 return;
//             } 
//             flushOperation(parseInt(buffer));
//             previousOperation=null;
//             buffer=runningTotal;
//             runningTotal=0;
//             break;
//         case "←":
//             if(buffer.length === 1){
//                 buffer="0";
//             }else{
//                 buffer=buffer.substring(0,buffer.length-1);
//             }
//             break;
//         case "+":
//         case "-":
//         case "×":
//         case "÷":
//             handleMath(Symbol);
//             break;
//     }
// }

// function handleMath(Symbol){
//     if(buffer==="0"){
//         return;
//     }

//     const Intbuffer=parseInt(buffer);

//     if(runningTotal===0){
//         runningTotal=Intbuffer;
//     }else{
//         flushOperation(Intbuffer);
//     }
//     previousOperation=Symbol;
//     buffer="0";

// }
// function flushOperation(Intbuffer){
//     if(previousOperation==="+"){
//         runningTotal+=Intbuffer;
//     }else if(previousOperation==="-"){
//         runningTotal-=Intbuffer;
//     }else if(previousOperation==="×"){
//         runningTotal*=Intbuffer;
//     }else if(previousOperation==="÷"){
//         runningTotal/=Intbuffer;
//     }
// }

// function handleNumber(numberString){
//     if(buffer==="0"){
//         buffer=numberString;
//     }else{
//         buffer+=numberString;
//     }
// }

// function init(){
//     document.querySelector(".calc-buttons").addEventListener("click",function(event){
//         buttonClick(event.target.innerText);
//     });
// }

// init();

runningTotal=0;
buffer="0";
let previousNumber =null;


const Screen =document.querySelector(".screen");

console.log(Screen.innerText);



function HandleNumber(value){

    buffer=value;
    // previousNumber=previousNumber??value
    console.log(buffer)
}

function handleSymbol(Symbol){
   
   

    switch(Symbol){
        case "+":
        case "-":
        case "x":
        case "÷":
            previousNumber=previousNumber??parseInt(buffer);
            break;
        case "=":
            console.log(previousNumber+parseInt(buffer));
            break;
    }

}



function main(){
    const Btn=document.querySelectorAll('.calc-button');
    Btn.forEach( (value)=>{
        value.addEventListener("click",(value)=>{
            value.target.innerText >-1 ? HandleNumber(value.target.innerText): handleSymbol(value.target.innerText);
        })
        }
    )
}

main();