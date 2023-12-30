const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const message = document.querySelector(".message");
const msg = document.querySelector(".msg");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Brace yourself, my friend. The sequel is always weirder than the original.Here's to more laughs, questionable decisions, and the unwavering bond and surviving each other's unique craziness.";
  gif.src =
    "https://media1.tenor.com/m/7DQxwueyD9MAAAAd/baby-yoda-yoda.gif";
    message.innerHTML = "";
    msg.innerHTML = "";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});