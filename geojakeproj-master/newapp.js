const one = document.querySelector(".juan")
const two = document.querySelector(".dos")
const three = document.querySelector(".tres")
const four = document.querySelector(".cuatro")
const five1 = document.querySelector(".cinco")
const six = document.querySelector(".seis") 
const seven = document.querySelector(".siete")
const eight = document.querySelector(".ocho")
const nine = document.querySelector(".nueve")
const zero = document.querySelector(".zero")
const reset = document.querySelector(".reset")
const del = document.querySelector(".del")
const period = document.querySelector('.decimal')
const minus = document.querySelector('.operator1')
const divide = document.querySelector('.operator2')
const multiply = document.querySelector('.operator')
const add = document.querySelector('.operator4')
const equal = document.querySelector('.equal-sign')



window.first = ""
window.second = ""
window.operator = ""
window.total = 0
let second = true
/*Use an if statement to indicate which variable name to use and set it to True*/
one.addEventListener("click",function(){
    let num = "1"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }

})
two.addEventListener("click",function(){
    let num = "2"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }


})
three.addEventListener("click",function(){
    let num = "3"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }

})
four.addEventListener("click",function(){
    let num = "4"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }

})
five1.addEventListener("click",function(){
    let num = "5"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }


})
six.addEventListener("click",function(){
    let num = "6"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }

})
seven.addEventListener("click",function(){
    let num = "7"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }


})
eight.addEventListener("click",function(){
    let num = "8"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }


})
nine.addEventListener("click",function(){
    let num = "9"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }


})
zero.addEventListener("click",function(){
    let num = "0"
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }


})
reset.addEventListener("click", function(){
    window.first = ""
    window.operator = ""
    window.second = ""
    second = true
    document.getElementById("texttochange").innerHTML = `${window.first}`


}





)

period.addEventListener("click", function(){
    let num = "."
    if (second){
        window.first = window.first.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    else{
        window.second = window.second.concat(num)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`


    }
})
minus.addEventListener("click",function(){
    if (window.operator != ''){
        alert("Can only use one operator")
    }
    else{
        window.operator = "-"
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator}`
        second = false
        window.value = "minus"

    }



})
divide.addEventListener("click",function(){
    if (window.operator != ''){
        alert("Can only use one operator")
    }
    else{
        window.operator = '/'
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator}`
        second = false
        window.value = "divide"

    }



})
multiply.addEventListener("click",function(){
    if (window.operator != ''){
        alert("Can only use one operator")
    }
    else{
        window.operator = '*'
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator}`
        second = false
        window.value = "multiply"

    }



})
add.addEventListener("click",function(){
    if (window.operator != ''){
        alert("Can only use one operator")
    }
    else{
        window.operator = "+"
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator}`
        second = false
        window.value = "add"

    }



})

del.addEventListener("click", function(){
    let length1 = window.first.length - 1;
    let length2 = window.second.length - 1;
    if (window.second.length > 0){
        window.second = window.second.substr(0, length2)
        document.getElementById("texttochange").innerHTML = `${window.first} ${window.operator} ${window.second}`

    }
    else if (window.operator.length > 0){
        window.operator = ""
        second = true
        document.getElementById("texttochange").innerHTML = `${window.first}${window.operator}`
    }
    else{
        window.first = window.first.substr(0, length1)
        document.getElementById("texttochange").innerHTML = `${window.first}`

    }
    
})
equal.addEventListener("click", function(){
    if (window.second === ""){
        alert("Must have a second value")
    
    }
    else{
        console.log("success")
        int = parseFloat(window.first)
        int2 = parseFloat(window.second)
        if (window.value === "minus"){
            window.total = int - int2
        }
        if (window.value ===  "add"){
            window.total = int + int2
        }
        if (window.value === "multiply"){
            window.total = int * int2
        }
        if (window.value === "divide"){
            window.total = int / int2
        }
        document.getElementById("texttochange").innerHTML = `${window.total}`

    }

})
const firsttheme = document.getElementById("on")
const secondtheme = document.getElementById("na")
const thirdtheme = document.getElementById("off")
const stylee = document.getElementById("stylee");
const modalSelector = document.querySelector(".calc-content")

firsttheme.addEventListener('click', function(){
  stylee.setAttribute("href", "../stylesheet2.css");
  modalSelector.style.backgroundColor = '#E6E6E6'//hsl(0, 0%, 90%);
})
secondtheme.addEventListener("click", function(){
    stylee.setAttribute("href", "../stylesheet.css");
    modalSelector.style.backgroundColor = '#3A4764'//hsl(222, 26%, 31%)';

})
thirdtheme.addEventListener("click", function(){
    stylee.setAttribute("href", "../stylesheet3.css");
    modalSelector.style.backgroundColor = '#160628'
    

})
