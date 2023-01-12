$(function () {

  $("nav li").on({
    click: function () {
      $(this).siblings().find(".submenu").hide();
      $(this).find(".submenu").toggle();
    }
  });

});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.remove("active");
    navMenu.remove("active");
  }))


  const slider = document.querySelector(".container");
  const container = document.querySelectorAll(".slide");

  document.getElementById("left").addEventListener("click", function() {
      toPrevious()
  })

  document.getElementById("right").addEventListener("click", function() {
      toNext()
  })

  let current = 0;
  let prev = 4;
  let next = 1;

  const toPrevious = () => {
      console.log('prev')
      if (current > 0) {
          toSlide(current - 1)
      } else {
          toSlide(container.length - 1)
      }
  }

  const toNext = () => {

      if (current < 4) {
          toSlide(current + 1)
      } else {
          toSlide(0)
      }
  }

  const toSlide = number => {
      current = number;
      prev = current - 1;
      next = current + 1;

      for (let i = 0; i < container.length; i++) {
          container[i].classList.remove("active");
          container[i].classList.remove("prev");
          container[i].classList.remove("next");
      }

      if (next == 5) {
          next = 0;
      }

      if (prev == -1) {
          prev = 4;
      }

      container[current].classList.add("active");
      container[prev].classList.add("prev");
      container[next].classList.add("next");
  }