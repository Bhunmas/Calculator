runningTotal=0;
buffer="0";
let previousNumber =null;
let Operator_sy=null;


const Screen =document.querySelector(".screen");

function HandleNumber(value){
    
    if(buffer!== "0"){
        buffer+=value;
    }else{
        buffer=value;
    }
    Screen.innerText=buffer;
}

function handleSymbol(Symbol){
    
    switch(Symbol){
        case "C":
            CalClear()
            break;
        case "←":
            buffer=buffer.length===1?"0":buffer.substring(0,buffer.length-1);
            break;
        case "+":
        case "−":
        case "×":
        case "÷":
            Operator_sy=previousNumber??Symbol;
            previousNumber=previousNumber??parseInt(buffer);
            buffer="0";
            break;
        case "=":
            CalOperator(Operator_sy)
            break;
        
    }
    Screen.innerText=buffer;

}
function CalClear(){
    Operator_sy=null;
    previousNumber =null;
    runningTotal=0;
    buffer="0";
}
function CalOperator(Operator){
    if(Operator==="+"){
        runningTotal=previousNumber+parseInt(buffer);
        
    }else if(Operator==="−"){
        runningTotal=previousNumber-parseInt(buffer);
      
    }else if(Operator==="×"){
        runningTotal=previousNumber*parseInt(buffer);
       
    }else if(Operator==="÷"){
        runningTotal=previousNumber/parseInt(buffer)
    }
    
    buffer=runningTotal
   
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