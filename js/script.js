const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(btn.textContent === 'ダークモード'){
        btn.textContent = 'ライトモード';
    }else{
        btn.textContent = 'ダークモード';
    }
});

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('side-menu');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

toggle.addEventListener('click', () => {
  menu.classList.add('open');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('active');
});