import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  imports: [
    CommonModule,
    MenubarModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  private router: Router = inject(Router);

  items: MenuItem[] | undefined;

  ngOnInit(): void {
     this.items = [
      {
          label: 'Clientes',
          icon: 'pi pi-receipt',
          items: [
              {
                  label: 'Crear',
                  icon: 'pi pi-plus-circle',
                  command: () => {
                    this.router.navigate(["/clientes/create"]);
                  }
              },
              {
                  label: 'Listar',
                  icon: 'pi pi-list',
                  command: () => {
                    this.router.navigate(["/clientes/"]);
                  }
              },
          ]
      },
    ];
  }
}
