// Mostrar/ocultar senha (login e cadastro)
function configurarMostrarSenha(idBotao, idCampo) {
    var botao = document.getElementById(idBotao);
    var campo = document.getElementById(idCampo);
    if (!botao || !campo) return; // a tela pode n?o ter esse bot?o

    var imagem = botao.querySelector("img");
    botao.addEventListener('click', function () {
        if (imagem.src.includes("mostrar.png")) {
            campo.type = "text";
            imagem.src = imagem.src.replace("mostrar.png", "ocultar.png");
        } else if (imagem.src.includes("ocultar.png")) {
            campo.type = "password";
            imagem.src = imagem.src.replace("ocultar.png", "mostrar.png");
        }
    });
}

configurarMostrarSenha("btn-pass", "password");
configurarMostrarSenha("btn-pass2", "cpassword");
