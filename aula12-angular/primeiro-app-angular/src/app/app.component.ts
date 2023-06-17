import { Component } from '@angular/core';
import Pessoa from './models/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public mensagem: string = 'Olá Angular ✨';

  public nome: string = 'Anderson Carlos Levi Drumond';
  public idade: number = 52;
  public profissao: string = 'Engenheiro(a) de Software';

  public animais = [{ id: 1, nome: 'Doguinho', raca: 'Caramelo', peso: '10', imagem: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/9984_175DA1F8EA481840-2.jpg?w=876&h=484&crop=1'},
                    { id: 2, nome: 'Doguinho', raca: 'Caramelo', peso: '10', imagem: 'https://img.freepik.com/fotos-premium/retrato-de-um-cachorrinho-este-e-um-animal-de-estimacao-muito-amoroso-e-maravilhoso_442254-3212.jpg' },
                    { id: 3, nome: 'Doguinho', raca: 'Caramelo', peso: '10', imagem: 'https://tribunadejundiai.com.br/wp-content/uploads/2022/06/Cachorrinho-adotado-por-empresa-e-responsavel-por-espalhar-alegria-e-tirar-umas-sonecas1.jpeg' }]

 public pessoas: Pessoa[] = [{nome: '', idade: 0, profissao: ''}, {nome: '', idade: 0, profissao: ''}, {nome: '', idade: 0, profissao: ''}];

}
