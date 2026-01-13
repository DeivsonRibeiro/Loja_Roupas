// LOGIN
function login() {
    const usuario = document.getElementById("usuario").value;

    if (usuario === "") {
        alert("Digite um usuário!");
        return;
    }

    localStorage.setItem("usuarioLogado", usuario);
    window.location.href = "index.html";
}

// CARRINHO
let total = 0;

function carregarTotal() {
    const salvo = localStorage.getItem("totalCarrinho");
    if (salvo) {
        total = parseFloat(salvo);
        if (isNaN(total)) total = 0;
        document.getElementById("total").innerText = total.toFixed(2).replace('.', ',');
    }
}

function adicionar(preco) {
    preco = parseFloat(preco.replace(',', '.'));
    total += preco;
    localStorage.setItem("totalCarrinho", total);
    document.getElementById("total").innerText = total.toFixed(2).replace('.', ',');
}

function limparCarrinho() {
    total = 0;
    localStorage.removeItem("totalCarrinho");
    document.getElementById("total").innerText = "0,00";
}
