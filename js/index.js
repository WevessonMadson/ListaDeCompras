const produtos = [
    { descricao: "Arroz Parbolizado", qtdMin: 3, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Arroz Branco", qtdMin: 2, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Feijão Carioca", qtdMin: 3, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Feijão Macassar", qtdMin: 2, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Açúcar", qtdMin: 4, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Farinha", qtdMin: 1, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Sal", qtdMin: 4, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Tempero", qtdMin: 4, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Coloral", qtdMin: 4, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Molho Shoyo", qtdMin: 2, qtdAtual: 0, unidade: "Und" },
    { descricao: "Macarrão", qtdMin: 15, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Fubá", qtdMin: 20, qtdAtual: 0, unidade: "Und" },
    { descricao: "Ketchup", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
    { descricao: "Molho de Tomate", qtdMin: 4, qtdAtual: 0, unidade: "Und" },
    { descricao: "Dueto Milho Verde", qtdMin: 4, qtdAtual: 0, unidade: "Und" },
    { descricao: "Queijo Ralado", qtdMin: 3, qtdAtual: 0, unidade: "Und" },
    { descricao: "Milho de Pipoca", qtdMin: 2, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Leite em Pó", qtdMin: 5, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Chocolate em Pó", qtdMin: 1, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Mistura de Morango em Pó", qtdMin: 1, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Amido de Milho", qtdMin: 1, qtdAtual: 0, unidade: "Cx" },
    { descricao: "Aveia em Flocos", qtdMin: 2, qtdAtual: 0, unidade: "Cx" },
    { descricao: "Oléo", qtdMin: 4, qtdAtual: 0, unidade: "Und" },
    { descricao: "Vinagre", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
    { descricao: "Leite Condensado", qtdMin: 3, qtdAtual: 0, unidade: "Cx" },
    { descricao: "Creme de Leite", qtdMin: 4, qtdAtual: 0, unidade: "Cx" },
    { descricao: "Goibada", qtdMin: 3, qtdAtual: 0, unidade: "Und" },
    { descricao: "Cream Cracker", qtdMin: 3, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Coquinho", qtdMin: 2, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Biscoito Maizena", qtdMin: 2, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Rosquinha", qtdMin: 2, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Café", qtdMin: 1, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Trigo", qtdMin: 1, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Tempero de Frango", qtdMin: 0.5, qtdAtual: 0, unidade: "Kg" },
    { descricao: "Guardanapo", qtdMin: 2, qtdAtual: 0, unidade: "Und" },
    { descricao: "Filme PVC", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
    { descricao: "Papel Alumínio", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
    { descricao: "Palito de Dentes", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
    { descricao: "Herbissimo", qtdMin: 2, qtdAtual: 0, unidade: "Und" },
    { descricao: "Esponja", qtdMin: 3, qtdAtual: 0, unidade: "Und" },
    { descricao: "Esponja de Aço", qtdMin: 3, qtdAtual: 0, unidade: "Und" },
    { descricao: "Papel Higiênico", qtdMin: 12, qtdAtual: 0, unidade: "Und" },
    { descricao: "Creme Dental", qtdMin: 6, qtdAtual: 0, unidade: "Und" },
    { descricao: "Sabonete", qtdMin: 12, qtdAtual: 0, unidade: "Und" },
    { descricao: "Sabão em Barra", qtdMin: 5, qtdAtual: 0, unidade: "Und" },
    { descricao: "Sabão em Pó", qtdMin: 5, qtdAtual: 0, unidade: "Pct" },
    { descricao: "Água Sanitária", qtdMin: 5, qtdAtual: 0, unidade: "Und" },
    { descricao: "Veja", qtdMin: 3, qtdAtual: 0, unidade: "Und" },
    { descricao: "Amaciante", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
    { descricao: "Desinfetante", qtdMin: 1, qtdAtual: 0, unidade: "Und" },
];

function createTableBody(descricao, qtdAtual, unidade) {
    return `<tr class='trTableBody'><td class='descProdTable'>${descricao}</td><td class='qtdProdTable'><input onfocus="selectContent()" oninput='updateData()' class='inputValue' type='number' value='${qtdAtual}'><span class='unidade'>${unidade}</span</td></tr>`;
};

function createTable(dataTables) {
    return `  
    <table id='produtos'>
        <thead>
            <tr>
                <th>DESCRICAO</th>
                <th>QTD ATUAL</th>
            </tr>
        </thead>
        <tbody>
            ${dataTables}
        </tbody>
    </table>`;
};

function renderReturn(e) {
    e.preventDefault();

    let objectProdutos = JSON.parse(localStorage.getItem("lastList")) || produtos;
    const table = document.getElementById("table");

    if (objectProdutos.length != produtos.length) {
        localStorage.setItem("lastList", JSON.stringify(produtos));
        objectProdutos = produtos;
    }

    let dataTable = "";

    objectProdutos.forEach(produto => {
        dataTable += createTableBody(produto.descricao, produto.qtdAtual, produto.unidade);
    });

    table.innerHTML = createTable(dataTable);
};

function updateData() {
    const trs = document.getElementById("produtos").rows;

    for (let i = 1; i < trs.length; i++) {
        produtos[i - 1].qtdAtual = Number(trs[i].getElementsByClassName('qtdProdTable')[0].getElementsByClassName('inputValue')[0].value);
    }

    localStorage.setItem("lastList", JSON.stringify(produtos));
};

function selectContent() {
    let curElement = document.activeElement;
    curElement.select();
}

async function gerarLista() {    
    const dataLista = JSON.parse(localStorage.getItem("lastList")) || produtos;

    let lista = "";

    dataLista.forEach(produto => {
        let qtdComprar = produto.qtdMin - produto.qtdAtual;
        if (qtdComprar > 0){
            lista += `${produto.descricao}  -  ${qtdComprar}\n`;
        }
    });

    await navigator.clipboard.writeText(lista);

    alert("Copiado para a area de transferencia");
};

window.addEventListener("DOMContentLoaded", renderReturn);
