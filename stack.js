
const stack = document.getElementById("stackquestion")
const formstack = document.getElementById("stackform")
const stackbutton = document.querySelector(".load-more-button")
//THIS IS USEFUL WHEN SETTING UP SECOND BUTTON BECAUSE I ALREADY DID IT BUT THEN PUT STACK SOMEWHERE ELSE
// const modal2 = document.getElementById("stackflowModal");
// const nuevobut = document.querySelector('.ten')
// const close2  = document.querySelector('.close2')
// nuevobut.addEventListener('click', function(){
//     modal2.style.display = "block";
    
// })
// // When the user clicks on <span> (x), close the modal
// close2.onclick = function() {
//     modal2.style.display = "none";
    
//   }
  
  // When the user clicks anywhere outside of the modal, close it

formstack.addEventListener("submit", function(e){
    e.preventDefault()
    let stackvalue = stack.value
    let stackamount = 10
    let testingvar = encodeURIComponent(stackvalue)
    
    let stackurl = `https://api.stackexchange.com/2.2/search/advanced?pagesize=${stackamount}&order=desc&sort=activity&accepted=True&q=${testingvar}&site=stackoverflow`
    
    fetch(stackurl).then(res => res.json()).then(data =>{
        if (data.items.length === 0) {
            document.getElementById("answers-container").innerHTML = "No Results found, please use more concise keywords!";
            return;
          }
          if(stackamount >= 100){
              document.getElementById("Load-More").innerHTML = "<h5> Sorry, no more results <h5>"
          }
          else {
            document.getElementById(
              "Load-More"
            ).innerHTML = `<button class="load-more-button" type="button" onClick="searchSO(${
              stackamount + 10
            }, ${data.items.length})">Load More</button>`;
          }
          const d = data.items;
          const x = d.map(
            (a) => `<a href="${a.link}" target=”_blank" class = "johncena">${a.title}</a>`
          );
          document.getElementById("search-result").innerHTML = `Searching Results for ${stackvalue}`
          document.getElementById("answers-container").innerHTML = x.join("<br><br>")
          
    
    })
    



}, false)
function searchSO(stackamount = 10){
    let stackvalue = stack.value
    let testingvar = encodeURIComponent(stackvalue)
    let stackurl = `https://api.stackexchange.com/2.2/search/advanced?pagesize=${stackamount}&order=desc&sort=activity&accepted=True&q=${testingvar}&site=stackoverflow`
  
    fetch(stackurl).then(res => res.json()).then(data =>{
        if (data.items.length === 0) {
            document.getElementById("answers-container").innerHTML = "No Results found, please use more concise keywords!";
            return;
          }
          if(stackamount >= 100){
              document.getElementById("Load-More").innerHTML = "<h5> Sorry, no more results <h5>"
          }
          else {
            document.getElementById(
              "Load-More"
            ).innerHTML = `<button class="load-more-button" type="button" onClick="searchSO(${
              stackamount + 10
            }, ${data.items.length})">Load More</button>`;
          }
          const d = data.items;
          const x = d.map(
            (a) => `<a href="${a.link}" target=”_blank" class = "johncena">${a.title}</a>`
          );
          document.getElementById("search-result").innerHTML = `Searching Results for ${stackvalue}`
          document.getElementById("answers-container").innerHTML = x.join("<br><br>")
          
    
    })
    
  }
// let stackamount = 10
// let testingvar = 'List Comprehension'
// let testingval = encodeURIComponent(testingvar)
// console.log(testingval)
// //let val = encodeURIComponent(stackvalue)
// let stackurl = `https://api.stackexchange.com/2.2/search/advanced?pagesize=10&order=desc&sort=activity&accepted=True&q=List%20Comprehension&site=stackoverflow`
// fetch(stackurl).then(res => res.json()).then(data => console.log(data))
//(fetch( `https://api.stackexchange.com/2.2/search/advanced?pagesize=${stackamount}&order=desc&sort=activity&accepted=True&q=${testingval}&site=stackoverflow`)).then(res => console.log(res))
