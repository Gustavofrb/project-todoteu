import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  // Use BehaviorSubject para rastrear a opacidade do toolbar
  private toolbarOpacitySource = new BehaviorSubject<number>(0.8);
  toolbarOpacity$ = this.toolbarOpacitySource.asObservable();

  updateToolbarOpacity(opacity: number) {
    this.toolbarOpacitySource.next(opacity);
  }

  onScroll(event: any): void {
    // Calcula a posição de rolagem
    const scrollPosition =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Calcula a nova opacidade com base na posição de rolagem
    const newOpacity = Math.min(1, scrollPosition / 120); // 120 é um valor de rolagem de exemplo, ajuste conforme necessário

    // Atualiza a opacidade usando o BehaviorSubject
    this.updateToolbarOpacity(newOpacity);
  }
}
