const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const topmenu = document.getElementById('top');
  topmenu.classList.toggle('topmenu');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


const dimensaoAtual = window.innerWidth;
function trocarImagem() {
  if (dimensaoAtual <= 768) {
    const img = document.querySelector('.image');
    img.setAttribute('src', 'assets/images/mobile/mob-image-interactive.jpg');

  }
}
trocarImagem();