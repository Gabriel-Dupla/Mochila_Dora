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
    
    //verifica no formulário se o elemento já existe pela posição nome e torna igual a quantidade colocada no formulário 
    const existe = itens.find(elemento => elemento.nome === nome.value)

    //Cria objeto item atual
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value

    }

    //Se existir, coloca o id dele como existente. Se não, cria o elemento e atribui como id desse elemento a posição do array atual.
    if (existe) {
        itemAtual.id = existe.id;

        atualizaElementos(itemAtual)

        //No nosso array de itens, na posição existe.id e sobrescrevemos pelo item atual 
        itens[existe.id] = itemAtual
        
    } else {
        itemAtual.id = itens.length;

        criaElemento(itemAtual)

        itens.push(itemAtual)

    }

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
    //Adicionamos data attribute pelo id sendo o id do itemAtual
    numeroItem.dataset.id = item.id
    //
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);
}

function atualizaElementos(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}