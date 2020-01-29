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
  	"<p class='ethno'>Ethnocentrism is the tendency to evaluate your group's values and standards as superior to other groups.</p>" +
    "<p class='qt-stories'> Flocking QT Stories explores how computational simulations of emergent complex behaviours, combined with storytelling, might provide us with ways to deepen our understanding of gender and sexuality-based marginalization and resilience through computer modeling and art.</p>";
  document.getElementById("click-here").remove();

  setTimeout(function() {
    resetInfoScreen();
  }, 10000);
}

/*
 Flocking QT Stories is an interactive digital art installation that explores how computational simulations of emergent compelx behaviours, combined with storytelling, might provide us with new ways to deepen our understanding of gender and sexuality-based marginalization and resilience through computer modeling and art.
*/

/*
The simulation models the emergent behaviour of societal gender and sexuality-based marginalization (harm) and resilience (support), showing how interactions between people and between people and institutions have cumulative effects on an individual person.
*/

/*
The stories in the simulation have been collected from people around Alberta with various gender and sexual identities, including cisgender and transgender and queer (LGBTQ+) and heterosexual people.
*/

/*
The simulation is part of Dylan Paré's dissertation in Educational Research in the Werklund School of Education.
*/


function resetInfoScreen() {
  location.reload(true);
  //   var clickHere = "<p id='click-here'><img class='click' src='https://smartexcel.sg/wp-content/uploads/2018/10/click-here.png'/></p>
}