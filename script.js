const container = document.querySelector(".container");
const mainImage = document.querySelector(".inner-wrapper");
const rImage = document.querySelector(".image.color-r");
const gImage = document.querySelector(".image.color-g");
const bImage = document.querySelector(".image.color-b");

let speed = 500;
let amount = 30;

let moveX = 0;
let moveY = 0;
let smoothX = 0;
let diffX = 0;
let smoothY = 0;
let diffY = 0;

let oldTime = null;
let delta = 0;

let animation;

container.addEventListener("mousemove", e => {
  moveX = e.clientX;
  moveY = e.clientY;
});

const animate = t => {
  if (oldTime) delta = t - oldTime;
  smoothX += ((moveX - smoothX) * delta) / speed;
  smoothY += ((moveY - smoothY) * delta) / speed;

  diffX = Math.round(moveX - smoothX);
  diffY = Math.round(moveY - smoothY);

  let translateMainX = (diffX * -2) / amount;
  let translateMainY = (diffY * -2) / amount;
  let translateRedX = (diffX * 3) / amount;
  let translateGreenX = (diffX * 2) / amount;
  let translateBlueX = (diffX * 1) / amount;
  let translateRedY = (diffY * 3) / amount;
  let translateGreenY = (diffY * 2) / amount;
  let translateBlueY = (diffY * 1) / amount;

  mainImage.style.transform = `translate(${translateMainX}px, ${translateMainY}px)`;
  rImage.style.transform = `translate(${translateRedX}px, ${translateRedY}px)`;
  gImage.style.transform = `translate(${translateGreenX}px, ${translateGreenY}px)`;
  bImage.style.transform = `translate(${translateBlueX}px, ${translateBlueY}px)`;
  oldTime = t;
  requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
