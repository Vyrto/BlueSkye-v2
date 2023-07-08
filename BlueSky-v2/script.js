
// PAGINA PAGAMENTO
const pixOptions = document.getElementById('pix-options');
const creditCardOptions = document.getElementById('credit-card-options');
const pixOption = document.getElementById('pix-option');
const creditCardOption = document.getElementById('credit-card-option');

pixOption.addEventListener('click', function() {
    pixOptions.style.display = 'block';
    creditCardOptions.style.display = 'none';
});

creditCardOption.addEventListener('click', function() {
    pixOptions.style.display = 'none';
    creditCardOptions.style.display = 'block';
});

function submitForm() {
    // Coloque o código para enviar o formulário aqui
    // Você pode acessar os valores dos campos usando os IDs definidos nos elementos
    alert('Pedido Realizado com Sucesso');
}

function toggleFields() {
    var tipoPessoa = document.getElementById('tipo-pessoa').value;
    var pessoaFisicaFields = document.getElementById('pessoa-fisica-fields');
    var pessoaJuridicaFields = document.getElementById('pessoa-juridica-fields');

    if (tipoPessoa === 'pessoa-fisica') {
    pessoaFisicaFields.style.display = 'block';
    pessoaJuridicaFields.style.display = 'none';
    } else if (tipoPessoa === 'pessoa-juridica') {
    pessoaFisicaFields.style.display = 'none';
    pessoaJuridicaFields.style.display = 'block';
    }
}
function toggleFields() {
    var tipoPessoa = document.getElementById('tipo-pessoa').value;
    var pessoaFisicaFields = document.getElementById('pessoa-fisica-fields');
    var pessoaJuridicaFields = document.getElementById('pessoa-juridica-fields');

    if (tipoPessoa === 'pessoa-fisica') {
    pessoaFisicaFields.style.display = 'block';
    pessoaJuridicaFields.style.display = 'none';
    } else if (tipoPessoa === 'pessoa-juridica') {
    pessoaFisicaFields.style.display = 'none';
    pessoaJuridicaFields.style.display = 'block';
    }
}

function calcularParcelas() {
    var valorTotal = parseFloat(document.getElementById("valorCredito").value.replace("R$ ", ""));
    var numeroParcelas = parseInt(document.getElementById("numeroParcelas").value);
    
    var valorParcela = (valorTotal / numeroParcelas) * 1.1;
    
    document.getElementById("resultado").innerHTML = numeroParcelas + "x R$ " + valorParcela.toFixed(2);
}
