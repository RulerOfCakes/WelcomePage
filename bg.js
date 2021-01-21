const body = document.querySelector("body");

const IMG_NUM = 5

function paintImage(imgNum){
  const image = document.createElement('img');image.classList.add('bgImageTemp');
  image.onload = function(){
    image.classList.remove('bgImageTemp');
    image.classList.add('bgImage');
  }
  image.src = `background/${imgNum}.jpg`;
  body.prepend(image);
  
  /*if(doneLoading){
    image.classList.remove('bgImageTemp');
    image.classList.add('bgImage');
  }*/
}

function genRandom(){
  const number = Math.ceil(Math.random() * IMG_NUM);
  return number;
}

function init(){
  const randomNum = genRandom();
  paintImage(randomNum);
}
init();