var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change slide every 10 seconds
}


function showMore(element) {
	element.innerHTML =
  	"<p class='ethno'>Ethnocentrism is the tendency to evaluate your group's values and standards as superior to other groups.</p>";
  document.getElementById("click-here").remove();

  setTimeout(function() {
    resetInfoScreen();
  }, 10000);
}


function resetInfoScreen() {
  location.reload(true);
  //   var clickHere = "<p id='click-here'><img class='click' src='https://smartexcel.sg/wp-content/uploads/2018/10/click-here.png'/></p>
}
