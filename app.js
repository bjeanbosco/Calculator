document.querySelectorAll('.number').
forEach(button=>button.addEventListener('click',getNumber))

document.querySelectorAll('.operator').
forEach(button=>button.addEventListener('click',getOperator))

document.querySelector('.equal').addEventListener('click',operate)

document.querySelector('.percentage').addEventListener('click',percentage)
document.querySelector('.clear').addEventListener('click',Clear)
document.querySelector('.delete').addEventListener('click',unDo)

let display=document.getElementById('display')
//below are variables for storing data
let screenMemory=''
let secondNumber=''
let Memory=[]
let step=0
const Symbols=['+','*','/','-']
//this function is for generating numbers on which calcualation is going to be carried out
function getNumber(e){
        display.value +=e.target.value
        screenMemory +=e.target.value
   
}
//this function  is for generating operator
function getOperator(e){
display.value +=e.target.value
Memory.push(screenMemory)
Memory.push(e.target.value)
console.log(Memory);
screenMemory=''
display.value=''
}

//this is the function for addition calcuation
function add(a,b){
    return a+b
}
//this is the function for addition calcuation
function subtract(a,b){
    return a-b
}
//this is the function for addition calcuation
function multiply(a,b){
    return a*b
}
//this is the function for addition calcuation
function divide(a,b){
    return a/b
}
//the function is for to works on all operations

function operate(){
Memory.push(screenMemory)
console.log(Memory);
for(let i=0;i<Memory.length;i++){
    if(Memory[i]===Symbols[0]){
        let res=add(Number(Memory[i-1]),Number(Memory[i+1]))
        display.value=res
        screenMemory=res
        Memory.push(res)
    }
    else if(Memory[i]===Symbols[1]){
        let res=Number(Memory[i-1])*Number(Memory[i+1])
        display.value=res
        screenMemory=res
        Memory.push(res)
    }
    
    else if(Memory[i]===Symbols[2]){
        if(Number(Memory[i+1])!==0){

            let res=Number(Memory[i-1])/Number(Memory[i+1])
            display.value=res
            screenMemory=res
            Memory.push(res)
        }
        else{
            display.value='E'
        }
    }
    
    else if(Memory[i]===Symbols[3]){
        let res=Number(Memory[i-1])-Number(Memory[i+1])
        display.value=res
        screenMemory=res
        Memory.push(res)
    }
}
}
//this is the function for clearing any thing in the screen 
function Clear(){
    Memory=[]
    screenMemory=''
    display.value=''
}
//this is the undo function once you did wrong
function unDo(){
    display.value=screenMemory.slice(0,-1)
    screenMemory=''
}

//this is function for calculating percentage
function percentage(){
    display.value=screenMemory/100
}