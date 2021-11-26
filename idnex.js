let inputEl = document.getElementById("input-el")
let storge={
   numb : ""
}
let numa

let sol
let pet = ""
let an = false
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let num4 = document.getElementById("num4")
let num6 = document.getElementById("num6")
let num5 = document.getElementById("num5")
let num7 = document.getElementById("num7")
let num8 = document.getElementById("num8")
let num9 = document.getElementById("num9")
let num0 = document.getElementById("num0")
let plus = document.getElementById("plus")
let equl = document.getElementById("equl")
let poiny = document.getElementById("poiny")
let min = document.getElementById("min")
let mul = document.getElementById("mul")
let dive = document.getElementById("dive")
let del = document.getElementById("del")
let xlp = document.getElementById("1/x")
let xnl = document.getElementById('x^2')
let sv = document.getElementById('pers')
let sin = document.getElementById('sin')
let cos = document.getElementById('cos')
let tan = document.getElementById('tan')
//let delfr =document.getElementById("delfir")
function delt(){
    inputEl.innerHTML = ''
    storge.numb=""
numa = ""
an = false
}

function delfir(){
   if(inputEl.innerHTML >=1){
   var a =inputEl.innerHTML.length
inputEl.innerHTML = (inputEl.innerHTML -a)/10
   }
}
function save(num){
 inputEl.innerHTML = num
  
   
}

function render(num){
    let vlu =num
    inputEl.innerHTML += vlu 
    console.log(inputEl.innerHTML)

    
}
num0.addEventListener("click", function num0(){
   render(0)
   if (an === true){
      storge.numb += "0"
         }
 
})
num1.addEventListener("click", function num1(){
   render(1)
   
   if ( an === true){
storge.numb += "1"
console.log(storge.numb)
   }
})
num2.addEventListener("click", function num2(){
   render(2)
   if ( an === true){
   storge.numb += "2"
   }
})
num3.addEventListener("click", function num3(){
   render(3)
   if ( an === true){
   storge.numb += "3"
   }
})
num4.addEventListener("click", function num4(){
   render(4)
   if ( an === true){
   storge.numb += "4"
   }
})
num5.addEventListener("click", function num5(){
   render(5)
   if ( an === true){
   storge.numb += "5"
   }
})
num6.addEventListener("click", function num6(){
   render(6)
   if ( an === true){
   storge.numb += "6"
   }
})
num7.addEventListener("click", function num7(){
   render(7)
   if ( an === true){
      storge.numb += "7"
      }
})
num8.addEventListener("click", function num8(){
   render(8)
   if (an === true){
      storge.numb += "8"
      }
})
num9.addEventListener("click", function num9(){
   render(9)
   if ( an === true){
      storge.numb += "9"
      }
})




equl.addEventListener("click", function equl(){
 //  console.log(JSON.parse(numa))
 //  console.log(JSON.parse(storge.numb))
switch (pet){

case "+": {
      sol = numa + JSON.parse(storge.numb)
break;
   }
case "-":{
   sol = numa - JSON.parse(storge.numb)
break;
}
case "*":{
   sol = numa * JSON.parse(storge.numb)
   break;
}
case "/":{
   sol = numa / JSON.parse(storge.numb)
   break;
}
case "a":{
   sol = 1 / numa
   break;
}
case "^":{
   sol = Math.pow(numa , JSON.parse(storge.numb))
   break;
}
case "sin":{
   sol = Math.sin(numa)
   console.log(sol)
   break;
}
case"cos" :{
   sol =Math.cos(numa)
}
case"tan":{
   sol= Math.tan(numa)
   break;
}
default:{
   alert("eror")
}











}


 /*
if (pet === "+"){
    sol = numa + JSON.parse(storge.numb)
}
else if (pet === "-"){
   sol = numa - JSON.parse(storge.numb)
}
else if (pet === "*"){
   sol = numa * JSON.parse(storge.numb)
}
else if(pet === "/" ){
  
   sol = numa / JSON.parse(storge.numb)
}
else if(pet === "a" ){
   sol = 1 / numa
}
else if (pet === "^"){
   sol = Math.pow(numa , JSON.parse(storge.numb))
}
else if(pet === "sin"){
   sol = Math.sin(numa)
   console.log(sol)
}
else{
   save ("eror")
}*/
save(sol)
storge.numb=""
numa = sol
})
poiny.addEventListener("click", function poiny(){
   
   render('.')
   
   
})   
min.addEventListener("click", function min(){

   numa = JSON.parse(inputEl.innerText)
   render("-")
   
pet ="-"
an = true
})
plus.addEventListener("click", function plus(){
   numa = JSON.parse(inputEl.innerText)
   render('+')
   
   pet ="+"
   an = true
})
mul.addEventListener("click", function mul(){
   numa = JSON.parse(inputEl.innerText)
   render('*')
  
   pet="*"
   an = true
})
dive.addEventListener("click", function dive(){
   numa = JSON.parse(inputEl.innerText)
   render('/')
   
  pet ="/"
  an = true
})
del.addEventListener("click", function del(){
 delt()
})

xlp.addEventListener("click" , function xlp(){
   storge.numb = inputEl.innerText
   //delt()
   numa = 1
  save(numa +'/'+storge.numb )
   
   pet ="/"
  
})
xnl.addEventListener('click' , function xnl(){
   storge.numb = inputEl.innerText
   numa = inputEl.innerText
  save(numa +'^2')
  pet="*"

})
sv.addEventListener('click' , function sv(){
   numa = inputEl.innerHTML
   render('^')
   pet ="^"
   an = true
})
sin.addEventListener('click', function sin(){
   numa = inputEl.innerHTML
   inputEl.innerHTML =""
   render('sin(' + numa + ')')
   
   pet="sin"
   
})
cos.addEventListener('click', function cos(){
   numa = inputEl.innerHTML
   inputEl.innerHTML =""
   render('cos(' + numa + ')')
   
   pet="cos"
   
})
tan.addEventListener('click' , function(){
   numa =inputEl.innerHTML
   inputEl.innerHTML =""
   render(`tan(${numa})`)
   pet="tan"
})