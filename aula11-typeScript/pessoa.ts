export default class Pessoa {
    public _nome: string
    public _idade: number

    constructor(nome: string, idade: number){
        this._nome = nome
        this._idade = idade
    }

    public getNome(): string{
        return this._nome
    }

    public setNome(nome: string): void {
        this._nome = nome
    }

    public getIdade(): number {
        return this._idade
    }

    public setIdade(idade: number) {
        this._idade = idade
    }

}