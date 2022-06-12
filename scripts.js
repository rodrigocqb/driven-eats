window.onload = () => {
    let selecao = document.querySelectorAll(".escolhas > div");
    for (let i = 0; i < selecao.length; i++) {
        selecao[i].onclick = selecionaOpcao;
    }
}

let prato; //vetor onde é armazenado o nome do prato e o preço do mesmo
let bebida; //vetor onde é armazenado o nome da bebida e o preço da mesma
let sobremesa; //vetor onde é armazenado o nome da sobremesa e o preço da mesma
let total; //soma dos preços de cada opção

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
        fechar.innerHTML = "Fechar pedido";
        fechar.onclick = fecharPedido;
    }
}

let pedido = document.querySelector(".fundo-confirmacao");
function fecharPedido() {
    pedido.classList.remove("escondido");
    document.querySelector(".prato-final").innerHTML = prato[0];
    document.querySelector(".bebida-final").innerHTML = bebida[0];
    document.querySelector(".sobremesa-final").innerHTML = sobremesa[0];
    document.querySelector(".preco-prato").innerHTML = "R$ "+ prato[1].toFixed(2);
    document.querySelector(".preco-bebida").innerHTML = "R$ "+ bebida[1].toFixed(2);
    document.querySelector(".preco-sobremesa").innerHTML = "R$ "+ prato[1].toFixed(2);
    document.querySelector(".preco-final").innerHTML = "R$ "+ total;
    let confirma = document.querySelector(".confirmar-pedido");
    confirma.onclick = enviarMensagem;
    let cancela = document.querySelector(".cancelar-pedido");
    cancela.onclick = cancelarPedido;
}

function cancelarPedido() {
    pedido.classList.add("escondido");
}

function enviarMensagem() {
    const nome = prompt("Qual o seu nome?");
    const endereco = prompt("Qual o seu endereço?");
    let message = "Olá, gostaria de fazer o pedido:\n" +
                "- Prato: " + prato[0] + "\n" +
                "- Bebida: " + bebida[0] + "\n" +
                "- Sobremesa: " + sobremesa[0] + "\n" +
                "Total: R$ " + total + "\n\n" +
                "Nome: " + nome + "\n" +
                "Endereço: " + endereco;
    window.location.href = "https://wa.me/5521971343779?text=" + encodeURIComponent(message);
}
