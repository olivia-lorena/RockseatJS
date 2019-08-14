//  elementos
var lista = document.querySelector("ul.lista");
var inputNovoItem = document.querySelector(".campo__input");
var btnAdd = document.querySelector(".campo__btn");

let itens = JSON.parse( localStorage.getItem("itens")) || [];

function adicionarTodasTarefas(){
    lista.innerHTML = "";

    for( let item of itens){

        let texto = document.createTextNode( item );
        let posicao = itens.indexOf(item);

        let link = document.createElement("input");
            link.classList.add("lista__check");
            link.type = "checkbox";
            link.setAttribute("onclick", 'checkarTarefa('+posicao+')');

        let elemento = document.createElement("li");
            elemento.classList.add('lista__item');
            elemento.appendChild( texto );
            elemento.appendChild( link );

        
        lista.appendChild( elemento );

    }

    salvarInfos();
}

function adicionarTarefa(){
    let valor = inputNovoItem.value;

    if(valor){
        itens.push(valor);
        inputNovoItem.value = '';

        adicionarTodasTarefas();
    }

}

function checkarTarefa(posicao){
    itens.splice( posicao , 1 );
    adicionarTodasTarefas();
}

function salvarInfos(){
    localStorage.setItem("itens", JSON.stringify(itens) );
}

btnAdd.onclick = adicionarTarefa;
adicionarTodasTarefas();