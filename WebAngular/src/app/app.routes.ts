import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./components/tipo-genero/tipo-genero-list/tipo-genero-list.component')
    }

];
