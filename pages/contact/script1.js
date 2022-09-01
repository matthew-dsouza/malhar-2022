console.log("change made at 12 am 13th aug");

const scriptURL = "https://script.google.com/macros/s/AKfycbzCu5pdeYEedozyD-cYMoISTxoPlaSUg97lzV3rVzByrffJGoQbfnAddZDIbFvsWRzA/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank You! Your submission has been received."))
    .catch((error) => console.error("Error!", error.message));
});

//-----------------------------------
// NAVBAR -------
//-----------------------------------
$(document).ready(function () {
	$(window).scroll(function () {
	  // sticky navbar on scroll script
	  if (this.scrollY > 20) {
		$(".navbar").addClass("sticky");
	  } else {
		$(".navbar").removeClass("sticky");
	  }
	});

  
	$(".navbar .menu li a").click(function () {
	  // applying again smooth scroll on menu items click
	  $("html").css("scrollBehavior", "smooth");
	});
  
	// toggle menu/navbar script
	$(".menu-btn").click(function () {
	  $(".navbar .menu").toggleClass("active");
	  $(".menu-btn i").toggleClass("active");
	});

	$(".close_nav").click(function () {
		$(".navbar .menu").removeClass("active");
		$(".ham").removeClass("active");
		// window.location.reload();
	  });
  });
