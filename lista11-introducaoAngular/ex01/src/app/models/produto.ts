export default class Produto {
    nome: string;
    descricao: string;
    imagem: string;
    valor: number;
    
    constructor(nome: string, descricao: string, imagem: string, valor: number){
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.valor = valor;
    }
}
