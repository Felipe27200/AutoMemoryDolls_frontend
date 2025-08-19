import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'clientes',
        loadChildren: () => import('./routes/cliente.routes').then(m => m.CLIENTE_ROUTES)
    },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];
