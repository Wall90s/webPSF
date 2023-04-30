// 1 - Elabore funções que realizem as quatro operações matemáticas principais
function somar(n1, n2) {
    return n1 + n2
}
console.log('Função Somar')
console.log(somar(10, 5))
console.log()

function subtrair(n1, n2) {
    return n1 - n2
}
console.log('Função Subtrair')
console.log(subtrair(10, 5))
console.log()

function multiplicar(n1, n2) {
    return n1 * n2
}
console.log('Função Multiplicar')
console.log(multiplicar(10, 5))
console.log()

function dividir(n1, n2) {
    return n1 / n2
}
console.log('Função Dividir')
console.log(dividir(10, 5))
console.log()

function retornaRaiz(n1) {
    return Math.sqrt(n1)
}
console.log('Função Retorna raiz')
console.log(retornaRaiz(64))
console.log()

// 2 - Elabore funções do tipo Arrow function que realizem as quatro operações matemáticas principais
let soma = (n1, n2) => {
    return n1 + n2
}
console.log('Arrow function Soma')
console.log(soma(12, 4))
console.log()

let subtrai = (n1, n2) => {
    return n1 - n2
}
console.log('Arrow function Subtrai')
console.log(subtrai(12, 4))
console.log()

let multiplica = (n1, n2) => {
    return n1 * n2
}
console.log('Arrow function Multiplica')
console.log(multiplica(12, 4))
console.log()

let divide = (n1, n2) => n1 / n2
console.log('Arrow function Divide')
console.log(divide(12, 4))
console.log()

let raiz = (n1) => {
    return Math.sqrt(n1)
}
console.log('Arrow function Raiz')
console.log(raiz(144))
console.log()

// 3 - Crie uma função que receba nome, sobrenome e idade e exiba a seguinte mensagem:
// "Seu nome completo é 'Nome' 'Sobrenome', você tem 'Idade' anos"
function usuario(nome, sobrenome, idade) {
    return `Seu nome completo é ${nome} ${sobrenome}, você tem ${idade} anos`
}
console.log(usuario('Juliana', 'Sandra Sales', '36'))
console.log()

// 4 - Crie uma função que receba um objeto e exiba a seguinte mensagem:
// "Bem vinde! 'Nome' 'Sobrenome', você tem 'Idade' anos
//  Suas informações de contato são: 'Telefones'
//  Endereços cadastrados: 'Endereços'
function cadastrar(cadastro) {
    let listaTelefones = ''
    for (let i = 0; i < cadastro.telefones.length; i++) {
        listaTelefones = listaTelefones + ' ' + cadastro.telefones[i] + '\n'
    }

    let listaEnderecos = ''
    for (let i = 0; i < cadastro.enderecos.length; i++) {
        listaEnderecos = listaEnderecos + ' ' + cadastro.enderecos[i] + '\n'
    }

    reposta =
        'Bem vinde! ' + cadastro.nome + ' ' + cadastro.sobrenome + ', você tem ' + cadastro.idade + ' anos \n' +
        'Suas informações de contato são:\n' + listaTelefones +
        'Endereços cadastrados:\n' + listaEnderecos

    return reposta
}

console.log(cadastrar({
    nome: 'Caroline',
    sobrenome: 'Fátima Campos',
    idade: '44',
    telefones: ['(67) 2908-7817', '(67) 98350-8982'],
    enderecos: ['Rua Lagoa Dourada, 392', 'Rua Roderick Grandall, 590']
}))