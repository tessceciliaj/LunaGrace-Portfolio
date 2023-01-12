$(function () {
  
  $("#slider").QCslider({
    duration: 5000
  });
 
  $('div.toshow').fadeIn(3500);

  $("nav li").on({
    click: function () {
      $(this).siblings().find(".submenu").hide();
      $(this).find(".submenu").toggle();
    }
  });

});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const subMenu = document.querySelector(".submenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>
  n.addEventListener("click", () => {
    hamburger.remove("active");
    navMenu.remove("active");
  }))


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




