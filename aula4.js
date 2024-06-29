function infoProd() {
    let produtoPreco = parseInt(prompt('Informe o valor do produto R$'));
    let icms = 0.21; 
    let precoImposto = produtoPreco * icms; 
    let valorTotal = produtoPreco + precoImposto; 
    return console.log(`O valor com imposto é R$ ${valorTotal}`)
}