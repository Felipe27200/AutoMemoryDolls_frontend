import { Component } from "@angular/core";
import { Routes } from "@angular/router";

import { DollCenterComponent } from "../dolls/doll-center/doll-center.component";
import { DollCreateComponent } from "../dolls/doll-create/doll-create.component";
import { DollUpdateComponent } from "../dolls/doll-update/doll-update.component";
import { DollListComponent } from "../dolls/doll-list/doll-list.component";

export const DOLL_ROUTES: Routes = [
    {
        path: '',
        component: DollCenterComponent,
        children: [
            { path: 'create', component: DollCreateComponent },
            { path: ':id', component: DollUpdateComponent },
            { path: '', component: DollListComponent },
        ]        
    }
];