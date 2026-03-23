//Tema claro/escuro
const bttn = document.getElementById("bttn");

bttn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

//Validar Forms
const form = document.getElementById("formContato");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let msg = document.getElementById("mss");

    //validar simples
    if(nome === "" || email === "" || mensagem === "") {
        msg.innerText = "Preencha todos os campos!";
        return;

    }

    //validar email
    if(!email.includes("@") || !email.includes(".")) {
        msg.innerText = "Email Inválido";
    
    }

    //mensagem usuário
    msg.innerText = "Mensagem enviada com sucesso!";

    form.reset();
});

const progresso = document.querySelectorAll(".progresso");
const secaoFormacao = document.getElementById("Formação");

function animarBarras() {
    const topoTela = window.innerHeight * 0.85;
    const posicao = secaoFormacao.getBoundingClientRect().top;

    if (posicao < topoTela) {
        progresso.forEach(barra => {
            barra.style.width = barra.getAttribute("data-width");
        });
    }
}

window.addEventListener("scroll", animarBarras);
