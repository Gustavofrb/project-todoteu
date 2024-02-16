import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sidebarVisible3: boolean = false;
  termoPesquisa: string = '';
  imagens = ["assets/1.jpg", "assets/2.jpg"];
  imagemAtualIndex = 0;
  imagemAtual = this.imagens[this.imagemAtualIndex];
  autoScrollInterval: any;
  toolbarOpacity: number = 0.8;

  constructor(private headerService: HeaderService) {}

  ngOnInit() {
    // Assine as alterações na opacidade
    this.headerService.toolbarOpacity$.subscribe(opacity => {
      this.toolbarOpacity = opacity;
    });

    this.startAutoScroll();
  }

  ativarSidebar() {
    this.sidebarVisible3 = !this.sidebarVisible3;
  }

  realizarPesquisa() {
    console.log('Termo de pesquisa:', this.termoPesquisa);
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.mostrarProximaImagem();
    }, 5000);
  }

  stopAutoScroll() {
    clearInterval(this.autoScrollInterval);
  }

  mostrarProximaImagem() {
    this.stopAutoScroll();

    if (this.imagemAtualIndex < this.imagens.length - 1) {
      this.imagemAtualIndex++;
    } else {
      this.imagemAtualIndex = 0;
    }

    this.imagemAtual = this.imagens[this.imagemAtualIndex];

    this.startAutoScroll();
  }

  mostrarImagemAnterior() {
    if (this.imagemAtualIndex > 0) {
      this.imagemAtualIndex--;
      this.imagemAtual = this.imagens[this.imagemAtualIndex];
    }
  }

  scrollIntoView() {
    const element = document.getElementById('quem-somos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
