const five = document.querySelector(".five")
var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("calcModal");



five.addEventListener('click', function(){
    modal.style.display = "block";
    
})
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
    if (event.target == modal2){
      modal2.style.display = "none"
    }
  }

  function showtime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    document.getElementById("ptime").innerHTML = time;
  }
  function showdate() {
    var day = new Date();
    var date = (day.toLocaleDateString(undefined, options));
    document.getElementById("pdate").innerHTML = date;
  }
  //Set timing interval to global variable name.
var clock = setInterval("showtime()", 1000);
//Function to display current time on the page.


//Set timing interval to global variable name
var calendar = setInterval("showdate()");
//Set preferences for the way the date is displayed
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//Function to display the current date on the page
