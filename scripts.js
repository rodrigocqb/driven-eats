window.onload = () => {
    let selecao = document.querySelectorAll(".escolhas > div");
    for (let i = 0; i < selecao.length; i++) {
        selecao[i].onclick = selecionaOpcao;
    }
}

let prato; //vetor onde é armazenado o nome do prato e o preço do mesmo
let bebida; //vetor onde é armazenado o nome da bebida e o preço do mesma
let sobremesa; //vetor onde é armazenado o nome da sobremesa e o preço do mesma
let total;

function selecionaOpcao() {
    if (this.classList.contains("prato") === true) {
        prato = [this.querySelector("h1").innerHTML, Number(this.querySelector("span").innerHTML.replace("R$ ", "").replace(",", "."))];
        let elemento = document.querySelector(".prato-escolhido");
        if (elemento !== null) {
            elemento.classList.toggle("prato-escolhido");
        }
        this.classList.toggle("prato-escolhido");
    } else if (this.classList.contains("bebida") === true) {
        bebida = [this.querySelector("h1").innerHTML, Number(this.querySelector("span").innerHTML.replace("R$ ", "").replace(",", "."))];
        let elemento = document.querySelector(".bebida-escolhida");
        if (elemento !== null) {
            elemento.classList.toggle("bebida-escolhida");
        }
        this.classList.toggle("bebida-escolhida");
    } else {
        sobremesa = [this.querySelector("h1").innerHTML, Number(this.querySelector("span").innerHTML.replace("R$ ", "").replace(",", "."))];
        let elemento = document.querySelector(".sobremesa-escolhida");
        if (elemento !== null) {
            elemento.classList.toggle("sobremesa-escolhida");
        }
        this.classList.toggle("sobremesa-escolhida");
    }
    if (document.querySelector(".prato-escolhido") !== null &&
        document.querySelector(".bebida-escolhida") !== null &&
        document.querySelector(".sobremesa-escolhida") !== null) {
        total = (prato[1]+bebida[1]+sobremesa[1]).toFixed(2);
        console.log(total)
        let fechar = document.querySelector(".botao");
        fechar.classList.add("fechar-pedido");
        fechar.onclick = fecharPedido;
    }
}

function fecharPedido() {
    let message = "Olá, gostaria de fazer o pedido:\n" +
                "- Prato: " + prato[0] + "\n" +
                "- Bebida: " + bebida[0] + "\n" +
                "- Sobremesa: " + sobremesa[0] + "\n" +
                "Total: R$ " + total;
    window.location.href = "https://wa.me/5521971343779?text=" + encodeURIComponent(message);
}
