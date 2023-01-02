$(function () {
  $("#slider").QCslider({
    duration: 5000
  });
 
  $('div.toshow').fadeIn(2500);

});

function setup() {
  let cnv = createCanvas(190, 190);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position( x, y);
}

function draw() {
  stroke(93, 0, 233);
  c = color('rgba(93, 0, 223, 0.03)');
  fill(c);
  background('#0d0c0f')
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01);
  square(0, 0, 200);
}


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


