const reviews = [
  {
    id: 1,
    name: "Susan Smith",
    job: "Web Developer",
    img: "./img/img1.jpg",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime",
  },
  {
    id: 2,
    name: "James Frank",
    job: "Designer",
    img: "./img/img2.jpg",
    text: " dolor sit amet consectetur adipisicing elit. Vel maxime",
  },
  {
    id: 3,
    name: "Antonhy",
    job: "Help Desk",
    img: "./img/img3.jpg",
    text: "sit amet consectetur adipisicing elit. Vel maxime",
  },
  {
    id: 4,
    name: "Franklin",
    job: "Back-end Developer",
    img: "./img/img4.jpg",
    text: "amet consectetur adipisicing elit. Vel maxime",
  },
  {
    id: 5,
    name: "Benjamin",
    job: "Team Leader",
    img: "./img/img5.jpg",
    text: "sdvmsldvm;dlorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime",
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const prevBtn = document.querySelector(".button-prev-btn");
const nextBtn = document.querySelector(".button-next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

const showPerson = function (person) {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
