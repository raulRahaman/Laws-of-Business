"use strict";
const lawParent = document.querySelectorAll(".law");

function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
    }
  });
}

const options = {
  root: null,
  threshold: 0.3,
};

const observer = new IntersectionObserver(callback, options);

lawParent.forEach((law) => observer.observe(law));
