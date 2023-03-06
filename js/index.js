const produtos = [
    { descricao: "Feijão Carioca", qtdMin: 3, qtdAtual: 0 },
    { descricao: "Feijão Macassar", qtdMin: 2, qtdAtual: 0 },
    { descricao: "Feijão Preto", qtdMin: 1, qtdAtual: 0 },
    { descricao: "Arroz Parbolizado", qtdMin: 3, qtdAtual: 0 },
    { descricao: "Arroz Branco", qtdMin: 5, qtdAtual: 0 },
    { descricao: "Fubá", qtdMin: 15, qtdAtual: 0 },
    { descricao: "Macarrão", qtdMin: 10, qtdAtual: 0 },
];

function createTableBody(descricao, qtdAtual) {
    return `<tr class='trTableBody'><td class='descProdTable'>${descricao}</td><td class='qtdProdTable'><input onfocus="selectContent()" oninput='updateData()' class='inputValue' type='number' value='${qtdAtual}'></td></tr>`;
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
        dataTable += createTableBody(produto.descricao, produto.qtdAtual);
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

function gerarLista() {    
    const dataLista = JSON.parse(localStorage.getItem("lastList"));

    let lista = "";

    dataLista.forEach(produto => {
        let qtdComprar = produto.qtdMin - produto.qtdAtual;
        if (qtdComprar > 0){
            lista += `${produto.descricao}  -  ${qtdComprar}\n`;
        }
    });

    window.navigator.clipboard.writeText(lista);

    alert("Copiado para a area de transferencia");
};

window.addEventListener("DOMContentLoaded", renderReturn);