import { Component, inject, OnInit } from '@angular/core';
import { TipoGeneroService } from '../../../service/tipo-genero.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipo-genero-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tipo-genero-list.component.html',
  styleUrls: ['./tipo-genero-list.component.css'] 
})
export default class TipoGeneroListComponent implements OnInit {

  private tipoGeneroService = inject(TipoGeneroService);
  tiposGeneros: any[] = []; // Inicializa como un arreglo vacío

  ngOnInit(): void {
    this.tipoGeneroService.list().subscribe({
      next: (tiposGeneros: any) => {
        console.log(tiposGeneros); 
        this.tiposGeneros = tiposGeneros;
      },
      error: (err: any) => {
        console.error('Error al obtener tipos de géneros:', err); 
      }
    });
  }
}
