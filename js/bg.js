const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad() {
    console.log("Finished Loading")
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {

  // 이미지 랜덤변경
  //const randomNumber = genRandom();
  //paintImage(randomNumber);

  paintImage(2);
}

init();