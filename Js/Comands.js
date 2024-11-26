// <<<<<<< HEAD
// const botaoSetinha = document.getElementById('botao-setinha');
// const menuLateral = document.querySelector('.menu-lateral');

// botaoSetinha.addEventListener('click', () => {
//   menuLateral.classList.toggle('mostrar-menu');
// });


const botaoEscondeMenu = document.getElementById("botaoToggle");
const sidebar = document.querySelector(".sidebar");
const textoLogo = document.getElementById("textoLogo");
const textoSubLogo = document.getElementById("textoSubLogo");
const textoHome = document.getElementById("textoHome");
const textoPlaystation = document.getElementById("textoPlaystation");
const textoXbox = document.getElementById("textoXbox");
const textoNintendo = document.getElementById("textoNintendo");
const textoPc = document.getElementById("textoPc");
const textoEventos = document.getElementById("textoEventos");
const textoModo = document.getElementById("textoModoLuz");
let escondido = "mostrando";


// console.log(escondido)
botaoEscondeMenu.addEventListener("click", moverMenu)

function moverMenu(){
    if(escondido == "mostrando"){
        escondido = "escondido"
        sidebar.classList.toggle("escondido");
        textoHome.textContent = "";
        textoPlaystation.textContent = "";
        textoXbox.textContent = "";
        textoNintendo.textContent = "";
        textoPc.textContent = "";
        textoEventos.textContent = "";
        textoLogo.textContent = "";
        textoSubLogo.textContent = "";
        textoModo.textContent = "";
        // console.log(escondido)
    }
    else{
        escondido = "mostrando"
        sidebar.classList.toggle("escondido");
        textoHome.textContent = "Home";
        textoPlaystation.textContent = "Playstation";
        textoXbox.textContent = "Xbox";
        textoNintendo.textContent = "Nintendo";
        textoPc.textContent = "Pc";
        textoEventos.textContent = "Eventos / Redes Sociais";
        textoLogo.textContent = "Game Área";
        textoSubLogo.textContent = "The best of gaming";
        textoModo.textContent = " ";
        // console.log(escondido)
    }
    
};

const botaoLightDark = document.querySelector(".light-dark");
// const textoModo = document.querySelector("#textoModoLuz");
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
        root.style.setProperty('--text-color', '#fff');
        textoModo.textContent = "Modo claro";
        iconeModo.src = "./Img/light-mode.png";
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

