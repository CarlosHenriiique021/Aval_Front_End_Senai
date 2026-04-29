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