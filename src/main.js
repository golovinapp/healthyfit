// let body = document.querySelector('body .container');
// let vec = document.querySelector('.vector-body');
// h = body.offsetHeight;
// vec.style.height = `${h}px`;
document.querySelector('html').classList.add('loaded');
window.addEventListener('load', function () {
  var preloader = document.getElementById('preloader');

  document.querySelector('html').classList.remove('loaded');
  preloader.style.display = 'none';
});



const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const btnDalee = document.querySelector(".btn-dalee");
const btnDast = document.querySelector(".btn-dast");
const btnReg = document.querySelector(".btn-reg");
const content = document.querySelector(".content");
const opros = document.querySelector(".opros");
const checkBox = document.querySelector(".check-box");
const yesNo = document.querySelector(".yes-no");
const middleVektor = document.querySelector(".middle-vektor");
const arrows = document.querySelectorAll(".arrow-bottom");
const blockOpros = document.querySelectorAll(".block-opros > p");
let x = 0;
let yes = 0;
let no = 0;

btnNo.addEventListener('click', () => {
  clickBtn();
  no++;
});

btnYes.addEventListener('click', () => {
  clickBtn();
  yes++;
});

function clickBtn() {
  if(blockOpros[x]){
      // fadeOut(blockOpros[x], 1000, 'flex');
    fadeOutToRight(blockOpros[x], 1000);
    x++;
    if (blockOpros[x]) {
      // fadeIn(blockOpros[x], 1000, 'flex');
      fadeInFromLeft(blockOpros[x], 1000);
    } else {
      // fadeIn(content, 1000, 'block');
      fadeInFromLeft(content, 1000);
      fadeInFromLeft(checkBox, 1000);
      opros.querySelector(".block-opros").classList.add('hidden');
      checkBox.classList.remove("hidden");
      middleVektor.classList.remove("hidden");
      arrows.forEach((item) =>{
        item.classList.remove('hidden')
      })
      yesNo.classList.add("hidden");
      document.querySelector('.check').classList.add('hidden');
      // opros
      console.log(yes);
      console.log(no);
      document.querySelector('.result').classList.remove('hidden');
      if (yes >= 6) {
        document.querySelector('.result .result-1').classList.remove('hidden');
        document.querySelector('p.result-1').classList.remove('hidden');
      } else if (yes > 3 && yes < 6) {
        document.querySelector('.result .result-2').classList.remove('hidden');
        document.querySelector('p.result-2').classList.remove('hidden');
      } else {
        document.querySelector('.result .result-3').classList.remove('hidden');
        document.querySelector('p.result-3').classList.remove('hidden');
      }
      // h = body.offsetHeight;
      // vec.style.height = `${h}px`;
      window.location = '#result';
    }
  }
}

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'block';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};

const fadeOut = (el, timeout) => {
  el.style.opacity = 1;
  el.style.transition = `opacity ${timeout}ms`;
  el.style.opacity = 0;

  setTimeout(() => {
    el.style.display = 'none';
  }, timeout);
};


const fadeInFromLeft = (el, timeout) => {
  if (!el) return; // Element mavjud emasligini tekshirish
  el.style.opacity = 0;
  el.style.transform = "translateX(-100%)";
  el.style.display = "block";
  el.style.transition = `opacity ${timeout}ms, transform ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
    el.style.transform = "translateX(0)";
  }, 10);
};

const fadeOutToRight = (el, timeout) => {
  if (!el) return; // Element mavjud emasligini tekshirish
  el.style.opacity = 1;
  el.style.transform = "translateX(0)";
  el.style.transition = `opacity ${timeout}ms, transform ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 0;
    el.style.transform = "translateX(100%)";
  }, 10);

  setTimeout(() => {
    el.style.display = "none";
  }, timeout);
};
// function fadeOut(el){
//     let opacity = 1;
//     let timer = setInterval(function() {
//         if(opacity <= 0.1) {
//             clearInterval(timer);
//             el.classList.add("hidden");
//         }
//         el.style.opacity = opacity;
//         opacity -= opacity * 0.1;
//     }, 10);
// }
// function fadeIn(el) {
//     let opacity = 0.01;
//     el.classList.remove("hidden");
//     let timer = setInterval(function() {
//         if(opacity >= 1) {
//             clearInterval(timer);
//         }
//         el.style.opacity = opacity;
//         opacity += opacity * 0.1;
//     }, 10);
// }