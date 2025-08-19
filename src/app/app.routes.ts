import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'clientes',
        loadChildren: () => import('./routes/cliente.routes').then(m => m.CLIENTE_ROUTES)
    },
    { 
        path: 'dolls',
        loadChildren: () => import('./routes/doll.routes').then(m => m.DOLL_ROUTES)
    },
    { path: '', redirectTo: 'clientes', pathMatch: 'full' }
];
