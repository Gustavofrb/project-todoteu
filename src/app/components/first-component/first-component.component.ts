import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  imagens = ["assets/fundador.png"];
  imagemFundadorIndex = 0; 
  imagemFundador = this.imagens[this.imagemFundadorIndex];
}
