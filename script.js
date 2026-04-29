const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const mensagem = document.getElementById("mensagemErro");

        mensagem.innerText = "";

        if (email === "admin@horizonte.com" && senha === "123456") {
            mensagem.style.color = "green";
            mensagem.innerText = "Login realizado com sucesso";

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);

        } else {
            mensagem.style.color = "red";
            mensagem.innerText = "Email ou senha incorretos";
        }
    });
}

function limparEndereco() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const campoCep = document.getElementById('cep');

if (campoCep) {
    campoCep.addEventListener('blur', function() {
        let valorCep = campoCep.value.replace(/\D/g, '');

        if (valorCep.length === 8) {
            fetch('https://viacep.com.br/ws/' + valorCep + '/json/')
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function(dados) {
                    if (dados.erro) {
                        alert("CEP não encontrado!");
                        limparEndereco();
                    } else {
                        document.getElementById('rua').value = dados.logradouro;
                        document.getElementById('bairro').value = dados.bairro;
                        document.getElementById('cidade').value = dados.localidade;
                        document.getElementById('estado').value = dados.uf;
                    }
                })
                .catch(function() {
                    alert("Erro ao consultar CEP.");
                });
        }
    });
}

const form = document.getElementById('formCadastro');

if (form) {
    form.addEventListener('submit', function(evento) {
        evento.preventDefault();

        let nome = document.getElementById('nome').value;
        let email = document.getElementById('email').value;
        let cep = document.getElementById('cep').value;

        if (nome === "" || email === "" || cep === "") {
            alert("Por favor, preencha todos os campos!");
        } else {
            const novoCadastro = {
                usuario: nome,
                contato: email,
                local: document.getElementById('rua').value
            };

            console.log(novoCadastro);
            alert("Cadastro realizado com sucesso!");
        }
    });
}