export default class Pessoa {
  nome: string;
  idade: number;
  profissao: string;

  constructor(nome: string, idade: number, profissao: string){
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
}
