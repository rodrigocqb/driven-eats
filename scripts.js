window.onload = () => {
    let selecao = document.querySelectorAll(".escolhas > div");
    for (let i = 0; i < selecao.length; i++) {
        selecao[i].onclick = selecionaOpcao;
    }
}
function selecionaOpcao() {
    if (this.classList.contains("prato") === true) {
        let elemento = document.querySelector(".prato-escolhido")
        if (elemento !== null) {
            elemento.classList.toggle("prato-escolhido");
        }
        this.classList.toggle("prato-escolhido");
    } else if (this.classList.contains("bebida") === true) {
        let elemento = document.querySelector(".bebida-escolhida")
        if (elemento !== null) {
            elemento.classList.toggle("bebida-escolhida");
        }
        this.classList.toggle("bebida-escolhida");
    } else {
        let elemento = document.querySelector(".sobremesa-escolhida")
        if (elemento !== null) {
            elemento.classList.toggle("sobremesa-escolhida");
        }
        this.classList.toggle("sobremesa-escolhida");
    }
    if (document.querySelector(".prato-escolhido") !== null &&
        document.querySelector(".bebida-escolhida") !== null &&
        document.querySelector(".sobremesa-escolhida") !== null) {
        let fechar = document.querySelector(".botao");
        fechar.classList.add("fechar-pedido");
        fechar.onclick = fecharPedido;
    }
}
function fecharPedido() {
    let msg = "Olá, gostaria de fazer o pedido:\n" +
                "- Prato: " + "\n" +
                "- Bebida: " + "\n" +
                "- Sobremesa: " + "\n" +
                "- Total: "
    window.location.href = "https://wa.me/5521971343779"
}
