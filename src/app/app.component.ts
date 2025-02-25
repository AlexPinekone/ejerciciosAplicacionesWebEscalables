import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { NameListComponent } from './components/name-list/name-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,CounterComponent, HeaderComponent, ContentComponent, FooterComponent, NameListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}
