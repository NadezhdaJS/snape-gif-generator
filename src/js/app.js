let btn = document.querySelector(".btn");
let gif = document.querySelector(".gif");

btn.addEventListener("click", function () {
  let randomGif = Math.trunc(Math.random() * 46 + 1);
  gif.src = `img/${randomGif}.gif`;
});
