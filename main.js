


function add(a,b){
    let ans= a+b;
    return (parseFloat(ans.toFixed(4)));
}

function subtract(a,b){
   let ans= a-b;
    return (parseFloat(ans.toFixed(4)));
}

function multiply(a,b){

  let ans= a*b;
    return (parseFloat(ans.toFixed(4)));
}

function divide(a,b){
    let ans=a/b
    if (a%b!=0){
    return (parseFloat(ans.toFixed(4)));}
    return ans;
}


function operate(first_num,second_num,operation){ 
    switch(operation){
        case 'addition':
            ans=add(first_num,second_num);
            
            break;
        case 'subtraction':
            ans=subtract(first_num,second_num);
            break;
        case 'division':
            ans=divide(first_num,second_num);
            break;
        case "multiplication":
            ans=multiply(first_num,second_num);
            break;
           
           


    }
return ans;
}


let sign='';
overflow=false;
let decimal=true;
equal_pressed=false;
const btns=document.getElementsByClassName("num-btn");
let btn=Array.from(btns);
let main_display=document.getElementById('main-display');
let display=document.getElementById('display');
console.log(display.innerText);
let equation='';
btn.forEach(element => {
    element.addEventListener('click',()=>{ 
         
            if  (equal_pressed){
               clear();
               equal_pressed=false;
           }
            if (element.innerText==="." ){
                if (decimal){
                    equation+=element.innerText;  console.log(equation,display.innerText);
                    console.log(equation.split(sign)[1])
                    main_display.innerText=equation.split(sign)[0];
                    num_written=true;
                    decimal=false
                    element.disabled='true';
                }
                else {
                      void(0);
                }
            }
            else {
           equation+=element.innerText; 
           if (sign) {
            console.log(equation,sign,'the first num is ',first_num)
           main_display.innerText=reverse_str(equation.slice(first_num.toString().length+1,).toString());
           console.log('the split equation is',equation.split(sign)[1]);
           }
           else  {
           
           main_display.innerText=reverse_str(equation);}
           num_written=true;console.table(equation,display.innerText,element,'sign',sign,'number event entered?');}
          // console.log(equation,display.innerText)
    })
  
    
});
decimal_btn=document.getElementById('decimal');
rev_dis='';
let num_written=false;
let first_num='';
let second_num="";
const clear_btn=document.getElementById("clear");
const ops=document.getElementsByClassName("ops-btn");
const equal_btn=document.getElementById('equal');
const backspace_btn=document.getElementById("backspace");
reversed_display=document.getElementById('reversed_display')
backspace_btn.addEventListener('click',()=>{
  deleteNum()
})

document.addEventListener('keydown',(e) => {
    if  (equal_pressed){
        clear();
        equal_pressed=false;
    }
    if (e.key==='Enter'){

        equalPressed();
        e.preventDefault()
    }
    if ((e.keyCode >=47 && e.keyCode<58) ||(e.keyCode >=95 && e.keyCode<106)){
        
        equation+=e.key;
        main_display.innerText=equation;
        rev_dis=equation;
       
        
        
         num_written=true;
    }
    if (e.keyCode===8){
       deleteNum()
    }
    if (e.key==="." && decimal){
        equation+=e.key;
        display.innerText=equation;
        decimal=false;
        decimal_btn.disabled=true;
    }
    console.log(e)

    })
pi_btn=document.getElementById('pi-btn');
e_btn=document.getElementById('e-btn');


pi_btn.addEventListener('click',()=>{
    if  (equal_pressed){
        clear();
        equal_pressed=false;
    }
    equation+=Math.PI;  
    display.innerText=equation;
    num_written=true;
})


e_btn.addEventListener('click',()=>{
    if  (equal_pressed){
        clear();
        equal_pressed=false;
    }
    equation+=Math.E;  
    display.innerText=equation;
    num_written=true;

    
})
let autom=false;
clear_btn.addEventListener('click',()=> clear());
let sign_btn=Array.from(ops);
let nums=0;
sign_btn.forEach(btn => {
    btn.addEventListener('click',()=>{
       
        main_display.innerText=''; 
        decimal=true;
         decimal_btn.disabled=false;
        console.log('num written is',num_written);
         if (num_written){
            nums+=1;
            num_written=false;
        }
         
        if (equal_pressed ) {first_num=answer.toString();
           operation=btn.id;
            sign=btn.innerText;
            main_display.innerText='';
            console.log(first_num,'is the  first num');
            equation=first_num;
            equal_pressed=false;
            nums=1;
        }
        console.log(nums,"is the number of numbers?");
        if (nums>=2){
            
           
            second_num=equation.slice(first_num.toString().length+1,);
            console.log('the equation is',first_num,sign,second_num);
            answer= operate(parseFloat(first_num),parseFloat(second_num),operation);
            equation=answer;
            nums=1;
            sign='';
            first_num=answer;
            console.log(first_num,"first",first_num.length);
        } console.log('the sign is ',sign,'and the number is ',nums);
        if (nums==1) {
           
           if (!sign){
            first_num=equation;  
            operation=btn.id;
        sign=btn.innerText ;
            } 
         }
       
       
        
        equation+=btn.innerText; 
         if (first_num=='Infinity') {
            clear()
        } 
        else {
            display.innerText=reverse_str(equation.slice(0,first_num.length+1).toString());}
       
    })
})
equal_btn.addEventListener('click',() => {
    equalPresed();
})

function clear(){
    console.log('cleaer called!')
    nums=0;
    first_num='';
    second_num='';
    main_display.innerText='';
    display.innerText='';
    operation='';
    sign='';
    equation='';
    answer='';
    num_written=false;
    equal_pressed=false;
    console.log(num_written);
}

function equalPresed(){
    equal_pressed=true;
    console.log('the equation is ',equation);
   second_num=equation.slice(first_num.toString().length+1,);
   console.log(first_num,'and second num is',second_num,'euqal pressed','operatin is',operation);
  
  answer= operate(parseFloat(first_num),parseFloat(second_num),operation);
  console.log('the answer is ',answer);
  console.log(typeof(answer));
  if (answer===Infinity){
    console.log('wtf')
    main_display.innerText=reverse_str('DUMBASS');
  }
  
  else if (isNaN(answer)){
    main_display.innerText=reverse_str('flmm');
  }
   else {display.innerText=reverse_str(equation);
    main_display.innerText=reverse_str(answer.toString());
       console.log(main_display.innerText,'is the real answer');}
       
}

function deleteNum(){
    if (main_display.innerText.slice(-1)==="."){
        decimal=true;
        decimal_btn.disabled=false;
     };
     main_display.innerText=main_display.innerText.slice( 0,-1);
     console.log('equation was ',equation);
     equation=equation.slice( 0,-1);console.log('equation now is ',equation);

} 
function check_display_length(){
  
    if (display.innerText.length>15){
        overflow=true;
    }
    
}

function reverse_str(str){
    reversed_dis= str.split('').reverse().join("");
    console.log(rev_dis,'reversed?')
    return reversed_dis;
}

