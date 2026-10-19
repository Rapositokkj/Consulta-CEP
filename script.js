const botao = document.getElementById('botao');
const inputCep = document.getElementById('cep');

const spanRegiao = document.getElementById('valor-regiao-postal');
const spanUf = document.getElementById('valor-uf');
const spanCidade = document.getElementById('valor-cidade');
const spanBairro = document.getElementById('valor-bairro');
const spanLogradouro = document.getElementById('valor-logradouro');

botao.addEventListener('click', function () {
    const cep = inputCep.value;
    const cepLimpo = cep.replace(/\D/g, '');

    const regexCep = /^[0-9]{8}$/;

    if (!regexCep.test(cepLimpo)) {
        alert('CEP inválido! Digite 8 números.');
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            if (dados.erro) {
                alert('CEP não encontrado.');
                return;
            }

            spanRegiao.textContent = dados.regiao;
            spanUf.textContent = dados.uf;
            spanCidade.textContent = dados.localidade;
            spanBairro.textContent = dados.bairro;
            spanLogradouro.textContent = dados.logradouro;
        })
        .catch(function (erro) {
            alert('Erro ao buscar o CEP. Verifique sua conexão.');
            console.log(erro);
        });
});