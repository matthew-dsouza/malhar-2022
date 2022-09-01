let htmlBody = document.querySelector("body");

let card1 = document.getElementsByClassName("container-card1")[0];
let card2 = document.getElementsByClassName("container-card2")[0];
let card3 = document.getElementsByClassName("container-card3")[0];
let card4 = document.getElementsByClassName("container-card4")[0];
let card5 = document.getElementsByClassName("container-card5")[0];
let card6 = document.getElementsByClassName("container-card6")[0];

let canvas1 = document.getElementsByClassName("card-item1_canvas")[0];
let canvas2 = document.getElementsByClassName("card-item2_canvas")[0];
let canvas3 = document.getElementsByClassName("card-item3_canvas")[0];
let canvas4 = document.getElementsByClassName("card-item4_canvas")[0];
let canvas5 = document.getElementsByClassName("card-item5_canvas")[0];
let canvas6 = document.getElementsByClassName("card-item6_canvas")[0];

let expand1 = document.getElementsByClassName("expand1")[0];
let expand2 = document.getElementsByClassName("expand2")[0];
let expand3 = document.getElementsByClassName("expand3")[0];
let expand4 = document.getElementsByClassName("expand4")[0];
let expand5 = document.getElementsByClassName("expand5")[0];
let expand6 = document.getElementsByClassName("expand6")[0];

let textContent1 = document.getElementById("p1");
let textContent2 = document.getElementById("p2");
let textContent3 = document.getElementById("p3");
let textContent4 = document.getElementById("p4");
let textContent5 = document.getElementById("p5");
let textContent6 = document.getElementById("p6");

// htmlBody.addEventListener('click', collapseItem);
card1.addEventListener("click", expandItem1);
card2.addEventListener("click", expandItem2);
card3.addEventListener("click", expandItem3);
card4.addEventListener("click", expandItem4);
card5.addEventListener("click", expandItem5);
card6.addEventListener("click", expandItem6);

function expandItem1() {
  if (canvas1.classList.contains("expanded")) {
    canvas1.classList.remove("expanded");
    textContent1.classList.remove("text-expand");
  } else {
    canvas1.classList.add("expanded");
    textContent1.classList.add("text-expand");
  }
  if (expand1.classList.contains("expand1")) {
    expand1.classList.remove("expand1");
    expand1.classList.add("expand_after");
  } else {
    expand1.classList.remove("expand_after");
    expand1.classList.add("expand1");
  }
}

function expandItem2() {
  if (canvas2.classList.contains("expanded")) {
    canvas2.classList.remove("expanded");
    textContent2.classList.remove("text-expand");
  } else {
    canvas2.classList.add("expanded");
    textContent2.classList.add("text-expand");
  }
  if (expand2.classList.contains("expand2")) {
    expand2.classList.remove("expand2");
    expand2.classList.add("expand_after");
  } else {
    expand2.classList.remove("expand_after");
    expand2.classList.add("expand2");
  }
}

function expandItem3() {
  if (canvas3.classList.contains("expanded")) {
    canvas3.classList.remove("expanded");
    textContent3.classList.remove("text-expand");
  } else {
    canvas3.classList.add("expanded");
    textContent3.classList.add("text-expand");
  }
  if (expand3.classList.contains("expand3")) {
    expand3.classList.remove("expand3");
    expand3.classList.add("expand_after");
  } else {
    expand3.classList.remove("expand_after");
    expand3.classList.add("expand3");
  }
}

function expandItem4() {
  if (canvas4.classList.contains("expanded")) {
    canvas4.classList.remove("expanded");
    textContent4.classList.remove("text-expand");
  } else {
    canvas4.classList.add("expanded");
    textContent4.classList.add("text-expand");
  }
  if (expand4.classList.contains("expand4")) {
    expand4.classList.remove("expand4");
    expand4.classList.add("expand_after");
  } else {
    expand4.classList.remove("expand_after");
    expand4.classList.add("expand4");
  }
}

function expandItem5() {
  if (canvas5.classList.contains("expanded")) {
    canvas5.classList.remove("expanded");
    textContent5.classList.remove("text-expand");
  } else {
    canvas5.classList.add("expanded");
    textContent5.classList.add("text-expand");
  }
  if (expand5.classList.contains("expand5")) {
    expand5.classList.remove("expand5");
    expand5.classList.add("expand_after");
  } else {
    expand5.classList.remove("expand_after");
    expand5.classList.add("expand5");
  }
}

function expandItem6() {
  if (canvas6.classList.contains("expanded")) {
    canvas6.classList.remove("expanded");
    textContent6.classList.remove("text-expand");
  } else {
    canvas6.classList.add("expanded");
    textContent6.classList.add("text-expand");
  }
  if (expand6.classList.contains("expand6")) {
    expand6.classList.remove("expand6");
    expand6.classList.add("expand_after");
  } else {
    expand6.classList.remove("expand_after");
    expand6.classList.add("expand6");
  }
}

// function collapseItem1() {
//   canvas1.classList.remove('expanded');
//   textContent1.classList.remove('text-expand');
// }

// function collapseItem2() {
//     canvas2.classList.remove('expanded');
//     textContent2.classList.remove('text-expand');
//   }
// function collapseItem3() {
//     canvas3.classList.remove('expanded');
//     textContent3.classList.remove('text-expand');
//   }