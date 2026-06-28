// Seleciona o formulário
const formulario = document.getElementById("formContato");

// Executa quando o usuário enviar o formulário
formulario.addEventListener("submit", function (e) {

    // Impede o recarregamento da página
    e.preventDefault();

    // Obtém os valores dos campos removendo espaços extras
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Elemento responsável pelas mensagens
    const resultado = document.getElementById("resultado");

    // Verifica se os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        resultado.style.color = "red";
        resultado.textContent = "Preencha todos os campos.";
        return;
    }

    // Validação do e-mail
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        resultado.style.color = "red";
        resultado.textContent = "E-mail inválido.";
        return;
    }

    // Mensagem de sucesso
    resultado.style.color = "green";
    resultado.textContent = "Mensagem enviada com sucesso!";

    // Limpa os campos do formulário
    formulario.reset();
});