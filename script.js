const observer = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach(el => observer.observe(el));



const card = document.querySelector(".card-container");

document.addEventListener("mousemove", e => {

const x = (window.innerWidth / 2 - e.clientX) / 35;
const y = (window.innerHeight / 2 - e.clientY) / 35;

card.style.transform =
`rotateY(${-x}deg) rotateX(${y}deg)`;

});