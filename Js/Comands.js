// <<<<<<< HEAD
// const botaoSetinha = document.getElementById('botao-setinha');
// const menuLateral = document.querySelector('.menu-lateral');

// botaoSetinha.addEventListener('click', () => {
//   menuLateral.classList.toggle('mostrar-menu');
// });


const botaoEscondeMenu = document.getElementById("botaoToggle");
const sidebar = document.querySelector(".sidebar");

botaoEscondeMenu.addEventListener("click", moverMenu)

function moverMenu(){
    sidebar.classList.toggle("escondido");
};

const botaoLightDark = document.querySelector(".light-dark");
const textoModo = document.querySelector("#textoModoLuz");
const iconeModo = document.querySelector("#iconModoLuz");
let modoAtual = "claro"
const root = document.documentElement;
botaoLightDark.addEventListener("click", trocaLuz)

function trocaLuz(){
    if(modoAtual == "claro"){
        modoAtual = "escuro"
        root.style.setProperty('--body-color', '#1e1e1e');
        root.style.setProperty('--sidebar-color', '#333');
        root.style.setProperty('--primary-color', '#ff6347');
        root.style.setProperty('--primary-color-light', '#444');
        root.style.setProperty('--togle-color', '#555');
        root.style.setProperty('--text-color', '#ccc');
        textoModo.textContent = "Modo claro";
        iconeModo.src = "./Img/light_mode.png";
    }
    else{
        modoAtual = "claro"
        root.style.setProperty('--body-color', '#e4e9f7');
        root.style.setProperty('--sidebar-color', '#fff');
        root.style.setProperty('--primary-color', '#695cfe');
        root.style.setProperty('--primary-color-light', '#f6f5f6');
        root.style.setProperty('--togle-color', '#ddd');
        root.style.setProperty('--text-color', '#707070');
        textoModo.textContent = "Modo escuro";
        iconeModo.src = "./Img/dark_mode.png";
    }
};
// >>>>>>> 0192e865e1e1b1eb83c004e21d7af1977f11d38e
