document.addEventListener("DOMContentLoaded", function () {

    const botaoEnviar = document.querySelector(".enviar");

    botaoEnviar.addEventListener("click", function () {

        const nome = document.getElementById("nome").value.trim();
        const observacao = document.getElementById("obs").value.trim();
        if (nome === "") {
            alert("Informe seu nome.");
            return;
        }

        const itens = document.querySelectorAll(".item");
        let pedido = [];

        itens.forEach(function (item) {
            const checkbox = item.querySelector("input[type='checkbox']");
            if (checkbox.checked) {
                pedido.push(item.querySelector(".nome-item").innerText);
            }
        });
       


        if (pedido.length === 0) {
            alert("Selecione ao menos um item.");
            return;
        }

        let mensagem = "***Pedido do dia***\n\n";
        mensagem += "Nome: " + nome + "\n\n";
        mensagem += "Itens:\n";

        pedido.forEach(function (item) {
            mensagem += "- " + item + "\n";
        });
        if (observacao !== "") {
        mensagem += "\n****Observações:****\n" + observacao + "\n";
        }
        const numeroWhatsApp = "556293542080";
        const url = "https://wa.me/" + numeroWhatsApp +
                    "?text=" + encodeURIComponent(mensagem);

        window.location.href = url;
    });

});
        document.addEventListener("DOMContentLoaded", function () {

         document.querySelectorAll(".toggle-desc").forEach(botao => {
            botao.addEventListener("click", () => {
            const item = botao.closest(".item");
            item.classList.toggle("aberto");
        });
    });

});