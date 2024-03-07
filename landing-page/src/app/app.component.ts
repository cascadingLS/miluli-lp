import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { HeroComponent} from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, AboutComponent, ContactsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './styles/index.scss'
})
export class AppComponent {
  title = 'landing-page';
}
