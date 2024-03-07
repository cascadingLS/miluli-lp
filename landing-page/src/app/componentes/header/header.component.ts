import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: '../../styles/index.scss'
  
})
export class HeaderComponent {
  isMenuVisible = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateMenuVisibility();
  }

  toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
  }

  private updateMenuVisibility(): void {
    // Defina a condição para mostrar ou ocultar o menu com base no tamanho da tela
    const shouldShowMenu = window.innerWidth <= 768; // Use o mesmo valor que você usa na sua mixin mq(xs)

    if (shouldShowMenu) {
      this.isMenuVisible = false; // Esconda o menu quando a tela for aumentada
    }
}}
