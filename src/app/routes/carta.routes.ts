import { Routes } from "@angular/router";

import { CartaCenterComponent } from "../cartas/carta-center/carta-center.component";
import { CartaCreateComponent } from "../cartas/carta-create/carta-create.component";
import { CartaListComponent } from "../cartas/carta-list/carta-list.component";
import { CartaUpdateComponent } from "../cartas/carta-update/carta-update.component";
import { CartaClienteComponent } from "../cartas/carta-cliente/carta-cliente.component";

export const CARTA_ROUTES: Routes = [
    {
        path: '',
        component: CartaCenterComponent,
        children: [
            { path: 'create', component: CartaCreateComponent },
            { path: 'cartas-cliente/:id', component: CartaClienteComponent },
            { path: ':id', component: CartaUpdateComponent },
            { path: '', component: CartaListComponent },
        ]        
    }
];