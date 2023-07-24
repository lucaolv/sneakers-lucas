import { Component } from '@angular/core';
import { Tenis } from './model/tenis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';

  tenis!: Tenis[];

  constructor(){
    this.tenis = [];
    this.tenis.push(new Tenis(1, "JORDAN", "TÊNIS AIR JORDAN 11 RETRO MASCULINO", "1.499.99", "https://artwalk.vteximg.com.br/arquivos/ids/228838-1000-1000/Tenis-Air-Jordan-11-Retro-Masculino-Preto.jpg?v=637430439213700000"));
    this.tenis.push(new Tenis(1, "JORDAN", "TÊNIS AIR JORDAN 4 TRAVIS SCOTT", "2.499.99", "https://cdn.sistemawbuy.com.br/arquivos/a0132ec4f6f30148c4be818b6c2da7b2/produtos/VEI5TIO7/308497-406_4-6193b63ea9a74.jpg"));
    this.tenis.push(new Tenis(1, "NIKE", "NIKE AIR MAX PLUS MASCULINO", "1.099.99", "https://artwalk.vteximg.com.br/arquivos/ids/350435-1000-1000/DQ398-1-001-1.jpg?v=638074135663770000"));
  }
}
