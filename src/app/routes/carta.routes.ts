import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { CartaCenterComponent } from "../cartas/carta-center/carta-center.component";
import { CartaCreateComponent } from "../cartas/carta-create/carta-create.component";
// import { CartaUpdateComponent } from "../cartas/carta-update/carta-update.component";
import { CartaListComponent } from "../cartas/carta-list/carta-list.component";

export const CARTA_ROUTES: Routes = [
    {
        path: '',
        component: CartaCenterComponent,
        children: [
            { path: 'create', component: CartaCreateComponent },
            // { path: ':id', component: CartaUpdateComponent },
            { path: '', component: CartaListComponent },
        ]        
    }
];