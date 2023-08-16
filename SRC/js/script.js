// const valor = document.querySelector("#value")


// function incremento(){
//     value.innerHTML = `${parseInt(value.innerText) +1}`
// }
// function decremento(){
//     value.innerHTML = `${parseInt(value.innerText) -1}`
// }

var button = document.querySelector(".button")
var Erro = document.querySelector(".Erro")

// Expressões regulares para validação
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var telefoneRegex = /^\+?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,4}[-\s]?\d{1,6}$/;
var nomeCompletoRegex = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Z}\s]+$/u;
var cidadeRegex = /^[\p{L}\p{N}\p{Z}\s]+$/u;
var paisRegex = /^[\p{L}\p{N}\p{Z}\s]+$/u;
var codigoPostalRegex = /^\d{5}$/;

function validarFormulario() {
    // Captura os valores dos campos
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("phone").value;
    var nomeCompleto = document.getElementById("nomeCompleto").value;
    var cidade = document.getElementById("city").value;
    var pais = document.getElementById("country").value;
    var codigoPostal = document.getElementById("postal-code").value;


    // Realiza a validação
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um telefone válido (apenas números, 10 dígitos).");
        return false;
    }

    if (!nomeCompletoRegex.test(nomeCompleto)) {
        alert("Por favor, insira seu nome completo.");
        return false;
    }

    if (!cidadeRegex.test(cidade)) {
        alert("Por favor, insira sua cidade.");
        return false;
    }

    if (!paisRegex.test(pais)) {
        alert("Por favor, insira seu país.");
        return false;
    }

    if (codigoPostal === "") {
        alert("Por favor, insira o código postal.");
        return false;
    }
    function validarFormulariocheckbox() {
        var checkbox = document.getElementById("checkbox");

        if (!checkbox.checked) {
            alert("Por favor, marque o checkbox antes de enviar o formulário.");
            return false;
        }

        // Se o checkbox estiver marcado, o formulário é válido e pode ser enviado

        // Se o checkbox estiver marcado, o formulário é válido e pode ser enviado
        // Redirecionar para a página de agradecimento
        window.location.href = "SRC/congratulation.html";
        alert("Email eviado com sucesso")
        return true;
    }
    validarFormulariocheckbox()
    // Se todas as validações passarem, o formulário é válido
    return true;
}

button.addEventListener("click", (event) => {
    event.preventDefault()
    validarFormulario()
})