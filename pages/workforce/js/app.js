import eventsData from "./events-data.js";
import managementData from "./management-data.js";
import networkingData from "./networking-data.js";

//events
const container3 = document.querySelector(".slide-container3");
const prevBtn3 = document.querySelector(".prev-btn3");
const nextBtn3 = document.querySelector(".next-btn3");

//management
const container1 = document.querySelector(".slide-container1");
const prevBtn1 = document.querySelector(".prev-btn1");
const nextBtn1 = document.querySelector(".next-btn1");

//networking
const container2 = document.querySelector(".slide-container2");
const prevBtn2 = document.querySelector(".prev-btn2");
const nextBtn2 = document.querySelector(".next-btn2");

// ====================================================================
//  EVENTS

// if length is 1 hide buttons
if (eventsData.length === 1) {
  nextBtn3.style.display = "none";
  prevBtn3.style.display = "none";
}

// if length is 2, add copies of slides
let eventsPeople = [...eventsData];
if (eventsData.length === 2) {
  eventsPeople = [...eventsData, ...eventsData];
}

container3.innerHTML = eventsPeople
  .map((person, slideIndex) => {
    const { img, name, text } = person;
    let position = "next3";
    if (slideIndex === 0) {
      position = "active3";
    }
    if (slideIndex === eventsPeople.length - 1) {
      position = "last3";
    }
    if (eventsData.length <= 1) {
      position = "active3";
    }
    return `<article class="slide3 slide-wrapper ${position}">
    <div class="slide-image-container">
      <img src=${img} class="slide-image" alt="${name}" />
    </div>
    <h4 class="slide-title">${name}</h4>
    <p class="text slide-text">
      ${text}
    </p>
  </article>`;
  })
  .join("");

const startSlider3 = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active3");
  const last = document.querySelector(".last3");
  let next = active.nextElementSibling;
  if (!next) {
    next = container3.firstElementChild;
  }
  active.classList.remove(["active3"]);
  last.classList.remove(["last3"]);
  next.classList.remove(["next3"]);
  if (type === "prev3") {
    active.classList.add("next3");
    last.classList.add("active3");
    next.classList.add("last3");
    next = last.previousElementSibling;
    if (!next) {
      next = container3.lastElementChild;
    }
    next.classList.remove(["next3"]);
    // below mf gives serious bugs, do not touch
    // next.classList.add("active1");
    return;
  }
  active.classList.add("last3");
  last.classList.add("next3");
  next.classList.add("active3");
};

nextBtn3.addEventListener("click", () => {
  startSlider3();
});

prevBtn3.addEventListener("click", () => {
  startSlider3("prev3");
});

// ====================================================================
//  MANAGEMENT

if (managementData.length === 1) {
  nextBtn1.style.display = "none";
  prevBtn1.style.display = "none";
}

// if length is 2, add copies of slides
let managementPeople = [...managementData];
if (managementData.length === 2) {
  managementPeople = [...managementData, ...managementData];
}

container1.innerHTML = managementPeople
  .map((person, slideIndex) => {
    const { img, name, text } = person;
    let position = "next1";
    if (slideIndex === 0) {
      position = "active1";
    }
    if (slideIndex === managementPeople.length - 1) {
      position = "last1";
    }
    if (managementData.length <= 1) {
      position = "active1";
    }
    return `<article class="slide1 slide-wrapper ${position}">
    <div class="slide-image-container">
      <img src=${img} class="slide-image" alt="${name}" />
    </div>
    <h4 class="slide-title">${name}</h4>
    <p class="text slide-text">
      ${text}
    </p>
  </article>`;
  })
  .join("");

const startSlider1 = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active1");
  const last = document.querySelector(".last1");
  let next = active.nextElementSibling;
  if (!next) {
    next = container1.firstElementChild;
  }
  active.classList.remove(["active1"]);
  last.classList.remove(["last1"]);
  next.classList.remove(["next1"]);
  if (type === "prev1") {
    active.classList.add("next1");
    last.classList.add("active1");
    next.classList.add("last1");
    next = last.previousElementSibling;
    if (!next) {
      next = container1.lastElementChild;
    }
    next.classList.remove(["next1"]);
    // below mf gives serious bugs, do not touch
    // next.classList.add("active1");
    return;
  }
  active.classList.add("last1");
  last.classList.add("next1");
  next.classList.add("active1");
};

nextBtn1.addEventListener("click", () => {
  startSlider1();
});

prevBtn1.addEventListener("click", () => {
  startSlider1("prev1");
});

// ====================================================================
//  NETWORKING

// if length is 1 hide buttons
if (networkingData.length === 1) {
  nextBtn2.style.display = "none";
  prevBtn2.style.display = "none";
}

// if length is 2, add copies of slides
let networkingPeople = [...networkingData];
if (networkingData.length === 2) {
  networkingPeople = [...networkingData, ...networkingData];
}

container2.innerHTML = networkingPeople
  .map((person, slideIndex) => {
    const { img, name, text } = person;
    let position = "next2";
    if (slideIndex === 0) {
      position = "active2";
    }
    if (slideIndex === networkingPeople.length - 1) {
      position = "last2";
    }
    if (networkingData.length <= 1) {
      position = "active2";
    }
    //     return `<article class="slide2 ${position}">
    // <img src=${img} class="img" alt="${name}"/>
    // <h4>${name}</h4>
    // <p class="text">
    // ${text}
    // </p>
    // </article>`;
    return `<article class="slide2 slide-wrapper ${position}">
    <div class="slide-image-container">
      <img src=${img} class="slide-image" alt="${name}" />
    </div>
    <h4 class="slide-title">${name}</h4>
    <p class="text slide-text">
      ${text}
    </p>
  </article>`;
  })
  .join("");

const startSlider2 = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active2");
  const last = document.querySelector(".last2");
  let next = active.nextElementSibling;
  if (!next) {
    next = container2.firstElementChild;
  }
  active.classList.remove(["active2"]);
  last.classList.remove(["last2"]);
  next.classList.remove(["next2"]);
  if (type === "prev2") {
    active.classList.add("next2");
    last.classList.add("active2");
    next.classList.add("last2");
    next = last.previousElementSibling;
    if (!next) {
      next = container2.lastElementChild;
    }
    next.classList.remove(["next2"]);
    // below mf gives serious bugs, do not touch
    // next.classList.add("active1");
    return;
  }
  active.classList.add("last2");
  last.classList.add("next2");
  next.classList.add("active2");
};

nextBtn2.addEventListener("click", () => {
  startSlider2();
});

prevBtn2.addEventListener("click", () => {
  startSlider2("prev2");
});
