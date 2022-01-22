
function scrollThere(hash) {
    //alert('hi')
    // location.hash = "#" + hash;
    document.getElementById(hash).scrollIntoView(true);

}


let nav = document.querySelector('.navbar')

var handlerFired;
window.addEventListener('scroll', function(e){
  var containerTop = document.querySelector('.nav-strike').getBoundingClientRect().top;
  if (containerTop <= 0) {
    if (!handlerFired) {
      handlerFired = 1;
      nav.style.background= "#f7d62e"; //changes nav to fill color below header section
    }    
  }
  if (containerTop > 0) {
    nav.style.background= "transparent";
    handlerFired = 0;
  }
});


