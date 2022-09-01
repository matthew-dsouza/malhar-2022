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
      console.log("open executed");
    });
  
    $(".close_nav").click(function () {
      $(".navbar .menu").removeClass("active");
      $(".ham").removeClass("active");
      // console.log("executed close");
      // window.location.reload();
    });
  });
  
  setTimeout(function () {
    document.querySelector(".navbar").style.visibility = "visible";
  }, 5000);
  

