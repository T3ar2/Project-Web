// variáveis de captura para modo escuro

const botaoLightDark = document.querySelector(".light-dark");
// const textoModo = document.querySelector("#textoModoLuz");
const iconeModo = document.querySelector("#iconModoLuz");
const imglogo = document.querySelector("#imglogo");
const imghome = document.querySelector("#imghome");
const imgps = document.querySelector("#imgps");
const imgxbox = document.querySelector("#imgxbox");
const imgnintendo = document.querySelector("#imgnintendo");
const imgpc = document.querySelector("#imgpc");
const imgeventos = document.querySelector("#imgeventos");
let modoAtual = "claro"
const root = document.documentElement;
botaoLightDark.addEventListener("click", trocaLuz)


// variáveis de captura para mostrar e esconder menu, jogado para o início pois as duas funções se misturam
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




//funcionamento do modo de luz
function trocaLuz(){
    if(modoAtual == "claro"){
        modoAtual = "escuro"
        root.style.setProperty('--body-color', '#1e1e1e');
        root.style.setProperty('--sidebar-color', '#333');
        root.style.setProperty('--primary-color', '#ff6347');
        root.style.setProperty('--primary-color-light', '#444');
        root.style.setProperty('--togle-color', '#555');
        root.style.setProperty('--text-color', '#fff');
        if(escondido == "mostrando"){
            textoModo.textContent = "Modo claro";
        }
        iconeModo.src = "./Img/light-mode.png";
        imglogo.src = "./Img/logoggPng.png";
        imghome.src = "./Img/home White.png";
        imgps.src = "./Img/playstation-logo White.png";
        imgxbox.src = "./Img/xbox-logo White.png";
        imgnintendo.src = "./Img/nintendo-switch White.png";
        imgpc.src = "./Img/computer White.png";
        imgeventos.src = "./Img/event White.png";
    }
    else{
        modoAtual = "claro"
        root.style.setProperty('--body-color', '#e5e5e5');
        root.style.setProperty('--sidebar-color', '#e5e5e5');
        root.style.setProperty('--primary-color', '#ffffff');
        root.style.setProperty('--primary-color-light', '#f6f5f6');
        root.style.setProperty('--togle-color', 'white');
        root.style.setProperty('--text-color', '#0d0c0c');
        if(escondido == "mostrando"){
            textoModo.textContent = "Modo escuro";
        }
        iconeModo.src = "./Img/dark_mode.png";
        imglogo.src = "./Img/LOGOgg.png";
        imghome.src = "./Img/home dark.png";
        imgps.src = "./Img/playstation-logo dark.png";
        imgxbox.src = "./Img/xbox-logo dark.png";
        imgnintendo.src = "./Img/nintendo-switch dark.png";
        imgpc.src = "./Img/computer dark.png";
        imgeventos.src = "./Img/event dark.png";
    }
};






// funcionamento do abre e fecha do menu

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
        textoEventos.textContent = "Eventos";
        textoLogo.textContent = "Game Área";
        textoSubLogo.textContent = "The best of gaming";
        if(modoAtual == "claro"){
            textoModo.textContent = "Modo Escuro";
        }else if(modoAtual == "escuro"){
            textoModo.textContent = "Modo Claro";
        }
        
        // console.log(escondido)
    }
    
};

//variáveis de captura para login
const botaoLogin = document.getElementById("botaoLogin");
const emailLogin = document.getElementById("login-email");
const passwordLogin = document.getElementById("login-password");
const usuarioLogin = document.getElementById("usuario-login");
botaoLogin.addEventListener("click", tentarLogin);
// funcionamento do login
function tentarLogin(){
    event.preventDefault(); // para impedir que o formulario seja de fato "enviado" pois estava dando reload na pagina
    // console.log("tentei login " + emailLogin.value + " " + passwordLogin.value);
    const email = emailLogin.value;
    const usuario = email.split("@")[0]; // forma de definir o usuario pelo valor anteriormente ao @ do email
    alert("Login realizado com sucesso no usuário: " + usuario);
    usuarioLogin.textContent = usuario;
};

//variáveis de captura para contato
const name = document.getElementById("name");
const email = document.getElementById("email");
const reason = document.getElementById("reason");
const message = document.getElementById("message");
const enviarContato = document.getElementById("enviarContato");
enviarContato.addEventListener("click", submitContato);

// funcionamento do contato
function submitContato(){
    event.preventDefault(); // para impedir que o formulario seja de fato "enviado" pois estava dando reload na pagina
    alert("Registrada a solicitação de suporte do usuário " + name.value + " com a motivação: " + reason.value + ". Detalhes:\n "
         + message.value + "\nO contataremos em até 3 dias úteis através do email " + email.value)
}



