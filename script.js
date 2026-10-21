// Guardamos os campos e partes do crachá.
const campoNome = document.querySelector("#nome");
const campoArea = document.querySelector("#area");
const botoesCor = document.querySelectorAll(".cor");
const botoesAvatar = document.querySelectorAll(".avatar");
const nomeCracha = document.querySelector("#nome-cracha");
const areaCracha = document.querySelector("#area-cracha");
const avatarCracha = document.querySelector("#avatar-cracha");
const cracha = document.querySelector("#cracha");
const codigoTexto = document.querySelector("#codigo-texto");

let corEscolhida = "#3478f6";
let avatarEscolhido = "👨‍💻";

// Atualiza o crachá e o exemplo de código.
function atualizarCracha() {
    let nome = campoNome.value;
    if (nome === "") {
        nome = "Seu nome";
    }

    nomeCracha.textContent = nome;
    areaCracha.textContent = campoArea.value;
    avatarCracha.textContent = avatarEscolhido;
    cracha.style.backgroundColor = corEscolhida;

    // JSON.stringify coloca as aspas e trata caracteres especiais (como " no nome).
    codigoTexto.textContent =
        "const nome = " + JSON.stringify(nome) + ";\n" +
        "const area = " + JSON.stringify(campoArea.value) + ";\n" +
        "const cor = " + JSON.stringify(corEscolhida) + ";\n" +
        "const avatar = " + JSON.stringify(avatarEscolhido) + ";";
}

campoNome.addEventListener("input", atualizarCracha);
campoArea.addEventListener("change", atualizarCracha);

// Seleciona uma das cores disponíveis.
for (let i = 0; i < botoesCor.length; i++) {
    botoesCor[i].addEventListener("click", function () {
        corEscolhida = botoesCor[i].dataset.cor;
        for (let j = 0; j < botoesCor.length; j++) {
            botoesCor[j].classList.remove("selecionada");
        }
        botoesCor[i].classList.add("selecionada");
        atualizarCracha();
    });
}

// Seleciona um avatar.
for (let i = 0; i < botoesAvatar.length; i++) {
    botoesAvatar[i].addEventListener("click", function () {
        avatarEscolhido = botoesAvatar[i].dataset.avatar;
        for (let j = 0; j < botoesAvatar.length; j++) {
            botoesAvatar[j].classList.remove("selecionado");
        }
        botoesAvatar[i].classList.add("selecionado");
        atualizarCracha();
    });
}

// Esconde os controles para destacar o crachá e tirar print.
document.querySelector("#modo-foto").addEventListener("click", function () {
    document.body.classList.add("modo-foto");
});

// Sai do modo foto sem apagar as escolhas feitas.
function sairModoFoto() {
    document.body.classList.remove("modo-foto");
}

// Botão flutuante que aparece só no modo foto.
document.querySelector("#sair-foto").addEventListener("click", sairModoFoto);

// A tecla Esc também sai do modo foto.
document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        sairModoFoto();
    }
});

// Reinicia as escolhas e volta à tela normal.
document.querySelector("#reiniciar").addEventListener("click", function () {
    campoNome.value = "";
    campoArea.selectedIndex = 0;
    corEscolhida = "#3478f6";
    avatarEscolhido = "👨‍💻";

    for (let i = 0; i < botoesCor.length; i++) {
        botoesCor[i].classList.remove("selecionada");
        if (botoesCor[i].dataset.cor === corEscolhida) {
            botoesCor[i].classList.add("selecionada");
        }
    }
    for (let i = 0; i < botoesAvatar.length; i++) {
        botoesAvatar[i].classList.remove("selecionado");
        if (botoesAvatar[i].dataset.avatar === avatarEscolhido) {
            botoesAvatar[i].classList.add("selecionado");
        }
    }

    sairModoFoto();
    atualizarCracha();
});

atualizarCracha();
