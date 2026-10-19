# 🔍 Consulta CEP

Site simples para consulta de CEP, desenvolvido com **HTML, CSS e JavaScript puro**, que retorna Região, Estado, Cidade, Bairro e Logradouro a partir de um CEP informado pelo usuário.

Projeto criado como estudo prático de **manipulação do DOM**, **validação com expressões regulares (regex)** e **consumo de API REST** com `fetch`.

## 🚀 Demonstração

> Adicione aqui o link do GitHub Pages (ou outro serviço de hospedagem), depois de publicar o projeto.

## 🛠️ Funcionalidades

- Validação do CEP digitado (aceita com ou sem hífen)
- Consulta em tempo real na API [ViaCEP](https://viacep.com.br/)
- Exibição de Região, Estado, Cidade, Bairro e Logradouro
- Tratamento de erros:
  - CEP em formato inválido
  - CEP inexistente
  - Falha de conexão com a API

## 💻 Tecnologias utilizadas

- HTML5
- CSS3 (Flexbox)
- JavaScript (DOM, Regex, Fetch API, Promises)
- [API ViaCEP](https://viacep.com.br/)

## 📁 Estrutura do projeto

```
consulta-cep/
├── index.html
├── style.css
└── script.js
```

## ▶️ Como executar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/consulta-cep.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd consulta-cep
   ```
3. Abra o arquivo `index.html` no navegador (ou use a extensão **Live Server** do VS Code).

## 📖 O que foi aprendido com este projeto

- Manipulação do DOM com `document.getElementById`
- Captura de eventos com `addEventListener`
- Validação de texto usando expressões regulares
- Requisições assíncronas com `fetch` e `Promises` (`.then()` / `.catch()`)
- Tratamento de erros em chamadas de API
- Organização de layout com Flexbox

## 📌 Próximos passos

- [ ] Indicador de carregamento durante a busca
- [ ] Formatação automática do CEP durante a digitação
- [ ] Busca ao pressionar Enter
- [ ] Melhorias de responsividade

## 👤 Autor

Desenvolvido por **RAFAEL** como parte do aprendizado em desenvolvimento web.

---

Sinta-se à vontade para sugerir melhorias ou abrir uma issue!