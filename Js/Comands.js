const botaoSetinha = document.getElementById('botao-setinha');
const menuLateral = document.querySelector('.menu-lateral');

botaoSetinha.addEventListener('click', () => {
  menuLateral.classList.toggle('mostrar-menu');
});
