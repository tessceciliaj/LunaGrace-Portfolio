$(function () {

  $("nav li").on({
    click: function () {
      $(this).siblings().find(".submenu").hide();
      $(this).find(".submenu").toggle();
    }
  });

});

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

  document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      
      const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

    }
  }