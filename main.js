const form = document.getElementById('form-contato');

const nomes = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContato();
    atualizaTabela()
})

function adicionaContato(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(numeros.includes(inputNumeroContato.value)){
        alert(`O contato ${inputNumeroContato.value} já foi inserido`);
    } else{

        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

//formatar o numero
const inputTelefone = document.getElementById('numero-contato');
inputTelefone.addEventListener('input', function(e) {
    let valor = e.target.value;
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
    e.target.value = valor;
});