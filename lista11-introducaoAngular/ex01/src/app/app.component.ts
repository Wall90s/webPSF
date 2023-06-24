import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public produtos:  Produto[] = new Array<Produto>();

  constructor(){
    this.produtos.push(
      new Produto("Bolo de Fubá com Goiabada", "Bolo de Fubá recheado com pedaços de goiabada", "https://static.ifood-static.com.br/image/upload/t_medium/pratos/5b42c921-322f-47d5-b29b-fefe5ed0e332/202202140917_3P0C_i.jpg", 30.40),
      new Produto("Bolo de Fubá com Goiabada", "Bolo de Fubá recheado com pedaços de goiabada", "https://static.ifood-static.com.br/image/upload/t_medium/pratos/5b42c921-322f-47d5-b29b-fefe5ed0e332/202202140917_3P0C_i.jpg", 30.40),
      new Produto("Bolo de Fubá com Goiabada", "Bolo de Fubá recheado com pedaços de goiabada", "https://static.ifood-static.com.br/image/upload/t_medium/pratos/5b42c921-322f-47d5-b29b-fefe5ed0e332/202202140917_3P0C_i.jpg", 30.40),
      new Produto("Bolo de Fubá com Goiabada", "Bolo de Fubá recheado com pedaços de goiabada", "https://static.ifood-static.com.br/image/upload/t_medium/pratos/5b42c921-322f-47d5-b29b-fefe5ed0e332/202202140917_3P0C_i.jpg", 30.40)
    )
  }
}
