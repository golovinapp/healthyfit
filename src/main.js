// let body = document.querySelector('body .container');
// let vec = document.querySelector('.vector-body');
// h = body.offsetHeight;
// vec.style.height = `${h}px`;

const btnNo = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const btnDalee = document.querySelector(".btn-dalee");
const btnDast = document.querySelector(".btn-dast");
const btnReg = document.querySelector(".btn-reg");
const content = document.querySelector(".content");
const opros = document.querySelector(".opros");
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
  fadeOut(blockOpros[x], 1000, 'flex');
  x++;
  if (blockOpros[x]) {
    fadeIn(blockOpros[x], 1000, 'flex');
  } else {
    fadeIn(content, 1000, 'block');
    opros.classList.add('hidden');
    document.querySelector('.check').classList.add('hidden');
    opros
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