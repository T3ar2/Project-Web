
const botaoEscondeMenu = document.getElementById("img-toggle");
const sidebar = document.querySelector(".sidebar");

botaoEscondeMenu.addEventListener("click", moverMenu)

function moverMenu(){
    sidebar.classList.toggle("escondido");
};
