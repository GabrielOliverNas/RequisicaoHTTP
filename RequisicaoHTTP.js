var jSON = fetch('https://api.myjson.com/bins/oi83g')
    .then(resposta => {
        return resposta.json()
    })
    .then(pegarValor => {
        var livros
        pegarValor.forEach(livros => {
            adicionaLivros(livros)
        });
    });

function adicionaLivros(livros) {
    let linha = adicionaTR(livros)
    var tabela = document.querySelector('#tabelaLivro')
    tabela.appendChild(linha)
}

function adicionaTR(livros) {
    let filtro = {
        codigo: livros.codigo,
        nome: livros.nome,
        preco: livros.preco,
        paginas: livros.paginas,
        categoria: livros.categoria.nome
    }
    let linha = document.createElement("tr")

    for (let key in filtro) {
        let novaTd = document.createElement("td")
        novaTd.textContent = filtro[key]
        linha.appendChild(novaTd)
    }
    return linha
}