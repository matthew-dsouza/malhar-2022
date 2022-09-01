console.log("change made at 12 am 13th aug");

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

//-----------------------------------
// PRODUCTION CONTROLS SCRIPT -------
//-----------------------------------

$("#btnFirstFrame").on("click", function () {
  tlMain.progress(0);
});
$("#btnReverse").on("click", function () {
  tlMain.reverse();
});
$("#btnPause").on("click", function () {
  tlMain.pause();
});
$("#btnPlay").on("click", function () {
  tlMain.play();
});
$("#btnLastFrame").on("click", function () {
  tlMain.progress(1);
});

$("#slider").slider({
  range: false,
  min: 0,
  max: 1,
  step: 0.001,
  slide: function (event, ui) {
    tlMain.progress(ui.value).pause();
  },
  stop: function () {
    tlMain.play();
  },
});

function updateSlider() {
  $("#slider").slider("value", tlMain.progress());
}

function showCtrls() {
  if (showControls) {
    TweenMax.set(".controls", { autoAlpha: 1 });
  }
}

//-----------------------------------
// END OF PRODUCTION CONTROLS SCRIPT
//-----------------------------------

//-----------------------------------
// HELPER FUNCTIONS -----------------
//-----------------------------------

var select = function (s) {
  return document.querySelector(s);
};
var selectAll = function (s) {
  return document.querySelectorAll(s);
};

// Function to return random number between given range
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return Math.random() * (max - min) + min;
}

function chanceRoll(chance) {
  if (chance == null) {
    chance = 50;
  }
  return chance > 0 && Math.random() * 100 <= chance;
}

//-----------------------------------
// END OF HELPER FUNCTIONS ----------
//-----------------------------------

//-----------------------------------
// PANEL SCRIPT ---------------------
//-----------------------------------

var // 1.1 Elements
  scene = select(".scene"),
  scrubber = select(".scrubb"),
  container = select(".container"),
  mainContent = select(".main-content"),
  artwork = select(".fullArtwork"),
  artLayer = selectAll(".artLayer"),
  mountain1 = select(".mountain1"),
  mountain2 = select(".mountain2"),
  mountain3 = select(".mountain3"),
  forest1 = select(".forest1"),
  forest2 = select(".forest2"),
  forest3 = select(".forest3"),
  foreground = select(".foreground"),
  sun = select(".sun"),
  ray = selectAll(".ray"),
  rayOne = select(".rayOne"),
  rayTwo = select(".rayTwo"),
  rayThree = select(".rayThree"),
  rayFour = select(".rayFour"),
  rayFive = select(".rayFive"),
  innerRays = [rayOne, rayTwo, rayThree],
  tlMain = new TimelineLite({ onStart: start, onComplete: finish });

// 2 SETTINGS
TweenMax.set(artwork, { attr: { viewBox: "1345 480 7 2" } });
TweenMax.set(artwork, { autoAlpha: 1 });
TweenMax.set(artLayer, {
  fill: "#2D253A",
  scale: 3,
  transformOrigin: "center center",
});
TweenMax.set(mountain1, { yPercent: 20 });
TweenMax.set(mountain2, { yPercent: 50 });
TweenMax.set(mountain3, { yPercent: 80 });
TweenMax.set(forest1, { yPercent: 120 });
TweenMax.set(forest2, { yPercent: 150 });
TweenMax.set(forest3, { yPercent: 300 });
TweenMax.set(foreground, { yPercent: 50 });

TweenMax.set(sun, { x: "+=17" });
TweenMax.set(ray, { fill: "#FFEDDD", transformOrigin: "center center" });
TweenMax.set(rayOne, { autoAlpha: 0.8 });
TweenMax.set(rayTwo, { autoAlpha: 0.6 });
TweenMax.set(rayThree, { autoAlpha: 0.4 });
TweenMax.set(rayFour, { autoAlpha: 0, scale: 1 });
TweenMax.set(rayFive, { autoAlpha: 0 });

// 3 ANIMATIONS
tlMain
  .to(
    mountain1,
    3,
    { fill: "#B0708F", yPercent: 0, scale: 1.2, ease: Power3.easeOut },
    0
  )
  .to(
    mountain2,
    3,
    { fill: "#9E6280", yPercent: -4, scale: 1.2, ease: Power3.easeOut },
    0.3
  )
  .to(
    mountain3,
    3,
    { fill: "#81476D", yPercent: -8, scale: 1.2, ease: Power4.easeOut },
    0.4
  )
  .to(
    forest1,
    3,
    { fill: "#683D66", yPercent: -15, scale: 1.2, ease: Power3.easeOut },
    0.8
  )
  .to(
    forest2,
    3,
    { fill: "#593656", yPercent: -20, scale: 1.2, ease: Power3.easeOut },
    1.4
  )
  .to(
    forest3,
    3,
    { fill: "#482B47", yPercent: -25, scale: 1.2, ease: Power3.easeOut },
    1.7
  )
  .to(foreground, 3.3, { yPercent: -17, scale: 1.2, ease: Power3.easeOut }, 1.7)
  .to(
    artwork,
    5,
    { attr: { viewBox: "0 0 2740 787" }, ease: Power2.easeOut },
    0
  )
  .add("levitate", 5)
  .from("header", 6, { y: "-=100", ease: Power3.easeInOut }, "levitate")
  .to("header", 1, { autoAlpha: 1, ease: Power3.easeInOut }, "levitate")
  .from(
    mainContent,
    6,
    { scale: 1.3, y: "-=250", ease: Power3.easeInOut },
    "levitate"
  )
  .to(mainContent, 6, { autoAlpha: 1, ease: Power3.easeInOut }, "levitate")
  .to(
    artwork,
    6,
    { attr: { viewBox: "0 0 2740 787" }, ease: Power3.easeInOut },
    "levitate"
  )
  .to(
    mountain1,
    6,
    { yPercent: 0, scale: 1, ease: Power3.easeInOut },
    "levitate"
  )
  .to(
    mountain2,
    6,
    { yPercent: 0, scale: 1, ease: Power3.easeInOut },
    "levitate"
  )
  .to(
    mountain3,
    6,
    { yPercent: 0, scale: 1, ease: Power3.easeInOut },
    "levitate"
  )
  .to(forest1, 6, { yPercent: 0, scale: 1, ease: Power3.easeInOut }, "levitate")
  .to(forest2, 6, { yPercent: 0, scale: 1, ease: Power3.easeInOut }, "levitate")
  .to(forest3, 6, { yPercent: 0, scale: 1, ease: Power3.easeInOut }, "levitate")
  .to(
    foreground,
    6,
    { yPercent: 0, scale: 1, ease: Power3.easeInOut },
    "levitate"
  );

var started = false;
var finished = false;

function start() {
  if (!started) {
    var tl = new TimelineMax();
    tl.staggerTo(
      innerRays,
      5,
      { scale: "+=0.1", autoAlpha: "-=0.3", repeat: -1, yoyo: true },
      1.5,
      0
    )
      .to(
        rayFour,
        5,
        {
          bezier: [
            { scale: 1, autoAlpha: 0 },
            { scale: 1, autoAlpha: 0.2 },
            { scale: 1.5, autoAlpha: 0 },
          ],
          repeat: -1,
          ease: Linear.easeNone,
        },
        0
      )
      .to(
        rayFive,
        7,
        {
          bezier: [
            { scale: 1, autoAlpha: 0 },
            { scale: 1, autoAlpha: 0.2 },
            { scale: 1.4, autoAlpha: 0 },
          ],
          repeat: -1,
          ease: Linear.easeNone,
        },
        1
      );

    started = true;
  }
}

function finish() {
  if (!finished) {
    TweenMax.to(scrubber, 1, { autoAlpha: 0.3 });
    finished = true;
  }
}

window.addEventListener("resize", function () {
  TweenMax.to(mainContent, 0.5, {
    transform: "matrix(1, 0, 0, 1, " + -mainContent.clientWidth / 2 + ", 0)",
  });
});

tlMain.play().timeScale(2);

var open = false;

var body = select("body");
var panelBackdrop = select(".panelBackdrop");
var panel = select(".panel");
// var panelRect = select("#panelRect");
// var panelBgSVG = select("#panelBgSVG");
// var panelIconSVG = select("#panelIconSVG");
// var panelIcon = select("#panelIcon");
// var panelIconLine1 = select("#panelIconLine1");
// var panelIconLine2 = select("#panelIconLine2");
// var docWidth;
// var panelWidth;
var panelHeight = 400;
var panelMaxSize = 1200;
var panelPosClosed = -305;
var panelPosOpen = 0;
// var artWidth = 620;
var iconWidth = 50;
var iconPadding = 20;
// var iconPos;
var iconPosStart = -50;
// var baseDur = 0.4;
var panelEase = Back.easeOut;

// Starting Values
// TweenMax.set(panelIconSVG, { width: iconWidth, bottom: iconPosStart });
// TweenMax.set(panelIconLine1, { drawSVG:"95% 100%", transformOrigin: "center" });
// TweenMax.set(panelIconLine2, { drawSVG:"0% 55%", transformOrigin: "center" });
// TweenMax.set(panel, { bottom: panelPosClosed, left: "50%", xPercent: "-50%", maxWidth: panelMaxSize, transformOrigin: "bottom left" });

// Set panel colors according to vars in template settings
function setPanelColors() {
  TweenMax.set("#stop1", { attr: { "stop-color": upperPanelColor } });
  TweenMax.set("#stop2", { attr: { "stop-color": lowerPanelColor } });
  TweenMax.set(panelIcon, { fill: iconFill, stroke: iconStroke });
  TweenMax.set(panelRect, { stroke: rectStroke });
}

// Show panel if showInfoPanel is set to true
function showPanel() {
  if (showInfoPanel) {
    TweenMax.set(panel, { autoAlpha: 1 });
    TweenMax.set(panelIconSVG, { autoAlpha: 1 });
  }
}

// Show panel toggle icon according to timer in template settings
function revealInfoIcon() {
  setTimeout(function () {
    TweenMax.to(panelIconSVG, baseDur, {
      bottom: iconPadding,
      ease: panelEase,
    });
  }, revealInfoButtonAfterSeconds * 1000);
}

// Set panel properties on load and resize
function setPanelProps() {
  docWidth = window.innerWidth;
  if (docWidth > panelMaxSize) {
    panelWidth = panelMaxSize;
    iconPos = panelMaxSize - iconWidth;
  } else {
    panelWidth = docWidth;
    iconPos = docWidth - iconWidth - iconPadding;
  }
  TweenMax.to(panel, baseDur, { width: panelWidth });
  TweenMax.to(panelIconSVG, baseDur, { x: iconPos });
  TweenMax.to(panelBgSVG, baseDur, {
    width: panelWidth,
    height: panelHeight,
    attr: { viewBox: "0 0 " + panelWidth + " " + panelHeight },
  });

  // Center .rockLogo
  if (panelWidth < 640) {
    TweenMax.to(".rock", 0, { marginLeft: (panelWidth - 20 - artWidth) / 2 });
  } else {
    TweenMax.to(".rock", 0, { marginLeft: -150 });
  }
}
window.addEventListener("load", setPanelProps);
window.addEventListener("resize", setPanelProps);

// Open and Close panel

// HOVER
// panelIconSVG.addEventListener("mouseover", function() {
// 	TweenMax.to(panelIconSVG, baseDur, { scale: 1.1, ease: panelEase });
// 	if (!open) {
// 		TweenMax.to(panel, baseDur, { bottom: panelPosClosed, rotation: -1, ease: panelEase });
// 	}
// });
// panelIconSVG.addEventListener("mouseout", function() {
// 	TweenMax.to(panelIconSVG, baseDur, { scale: 1, ease: panelEase });
// 	if (!open){
// 		TweenMax.to(panel, baseDur, { bottom: panelPosClosed, rotation: 0, ease: panelEase });
// 	}
// });

// CLICK
// panelIconSVG.addEventListener("click", function() {
// 	if (!open) {
// 		openPanel();
// 	} else {
// 		closePanel();
// 	}
// });
// panelBackdrop.addEventListener("click", closePanel);

// function openPanel() {
// 	TweenMax.to(panel, baseDur, { bottom: panelPosOpen, ease: panelEase });
// 	TweenMax.to(panel, baseDur, { bezier: [{rotation: -1},{rotation: -5},{rotation: 0}] });
// 	TweenMax.to(panelIconSVG, baseDur, { bottom: iconPadding-panelPosClosed, ease: panelEase, delay: 0.05 });
// 	TweenMax.to(panelBackdrop, baseDur, { autoAlpha: 0.5 });
// 	TweenMax.set(body, { overflow: "hidden" });
// 	animToCloseIcon();
// 	open = true;
// }

// function closePanel() {
// 	TweenMax.to(panel, baseDur, { bottom: panelPosClosed, ease: Back.easeInOut });
// 	TweenMax.to(panel, baseDur*2, { bezier: [{rotation: 0},{rotation: 5},{rotation: 0}], ease: Power0.easeNone });
// 	TweenMax.to(panelIconSVG, 0.6, { bottom: iconPadding, ease: Back.easeInOut, delay: 0.05 });
// 	TweenMax.to(panelBackdrop, baseDur, { autoAlpha: 0 });
// 	TweenMax.set(body, { overflow: "visible" });
// 	animToInfoIcon();
// 	open = false;
// }

// function animToInfoIcon() {
// 	new TimelineMax()
// 		.to(panelIconLine1, 0.2, { rotation: 0 }, 0)
// 		.to(panelIconLine2, 0.2, { rotation: 0 }, 0)
// 		.add("expand")
// 		.to(panelIconLine1, 0.1, { drawSVG:"95% 100%" }, "expand")
// 		.to(panelIconLine2, 0.1, { drawSVG:"0% 55%" }, "expand")
// }
// function animToCloseIcon() {
// 	new TimelineMax()
// 		.to(panelIconLine1, 0.1, { drawSVG:"0% 100%" }, 0)
// 		.to(panelIconLine2, 0.1, { drawSVG:"0% 100%" }, 0)
// 		.add("expand")
// 		.to(panelIconLine1, 0.2, { rotation: 45 }, "expand")
// 		.to(panelIconLine2, 0.2, { rotation: -45 }, "expand")
// }

// Show production controls true/false & execute
// var showControls = false;
// showCtrls();

// Use panel true/false & execute
// var showInfoPanel = true;
// showPanel();

// Reveal info buttom after seconds, or use as callback
// var revealInfoButtonAfterSeconds = 4;
// revealInfoIcon();

// Customize panel styles to match pen & execute
// var upperPanelColor = "hsla(0, 0%, 50%, 0.5)",
// 	lowerPanelColor = "hsla(0, 0%, 50%, 0.8)",
// 	rectStroke = lowerPanelColor,
// 	iconFill = upperPanelColor,
// 	iconStroke = lowerPanelColor;
// setPanelColors();
