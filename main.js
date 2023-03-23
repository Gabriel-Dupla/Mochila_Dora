//Pegando o id do formulário e lista de itens 
const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
//Pegando elementos guardados no local storage e tornando valor ou cria array vazio para os itens
const itens = JSON.parse(localStorage.getItem("itens")) || []

//Itens do localStorage colocados na tela
itens.forEach( (elemento) => {
    criaElemento(elemento)

} )

//Recebendo e criando os itens
form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    //Cria objeto item atual
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value

    }

    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "" ;
    quantidade.value = "";
})

//Criando os elementos
function criaElemento(item) {
    //Cria uma elemento de tag <li> para o HTML sem alterar o HTML.
    const novoItem = document.createElement('li');
    //Adiciona a classe item para a tag <li> recém criado no HTML, exemplo linha 29.
    novoItem.classList.add("item");

    //Cria uma elemento de tag <strong> para o HTML.
    const numeroItem = document.createElement('strong');
    /*Coloca a tag <strong> dentro da tag <li>, index.html, exemplo linha 29.*/
    numeroItem.innerHTML = item.quantidade;
    //
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}