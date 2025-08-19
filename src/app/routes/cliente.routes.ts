import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { ClienteCenterComponent } from "../clientes/cliente-center/cliente-center.component";
import { ClienteCreateComponent } from "../clientes/cliente-create/cliente-create.component";
import { ClienteUpdateComponent } from "../clientes/cliente-update/cliente-update.component";
import { ClienteListComponent } from "../clientes/cliente-list/cliente-list.component";

export const CLIENTE_ROUTES: Routes = [
    {
        path: '',
        component: ClienteCenterComponent,
        children: [
            { path: 'create', component: ClienteCreateComponent },
            { path: ':id', component: ClienteUpdateComponent },
            { path: '', component: ClienteListComponent },
        ]        
    }
];