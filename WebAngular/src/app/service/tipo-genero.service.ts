import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoGeneroService {

  private http = inject(HttpClient);

  list() {
    return this.http.get('http://localhost:8080/api/v1/tipos_generos');
  }

  get(id: number) {
    return this.http.get(`http://localhost:8080/api/v1/tipos_generos/${id}`);
  }

  create(contact: any) {
    return this.http.post('http://localhost:8080/api/v1/tipos_generos', contact);
  }

  update(id: number, contact: any) {
    return this.http.put(`http://localhost:8080/api/v1/tipos_generos/${id}`, contact);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/api/v1/tipos_generos/${id}`);
  }
}


