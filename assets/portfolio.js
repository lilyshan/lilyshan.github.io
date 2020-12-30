/*Activates the Slick JS */

$(document).ready(function(){
  $('.single-item').slick({
  	dots:true, /* adds the dots at the bottom of each slideshow*/
  });
}); 

/*Creates responsive hamburger menu */

// function hamburger() {
//   var x = document.getElementById("navbar");
//   if (x.className === "navbar") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar";
//   }
// }