import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import TipoGeneroListComponent from "./components/tipo-genero/tipo-genero-list/tipo-genero-list.component";
import { TipoGeneroFormComponent } from './components/tipo-genero/tipo-genero-form/tipo-genero-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TipoGeneroListComponent, TipoGeneroFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebAngular';
}