import { Component } from '@angular/core';
import { ImgContainerComponent } from '../../componentes/img-container/img-container.component';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ImgContainerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {

}
