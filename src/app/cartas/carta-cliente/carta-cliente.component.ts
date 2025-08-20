import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartaTableComponent } from "../carta-table/carta-table.component";

import { MessageService } from 'primeng/api';
import { CommonResponseService } from '../../services/common-response.service';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-carta-cliente',
  imports: [CartaTableComponent],
  providers: [MessageService],
  templateUrl: './carta-cliente.component.html',
  styleUrl: './carta-cliente.component.css'
})
export class CartaClienteComponent implements OnInit{
  private cartaService = inject(CartaService)
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)
  private router = inject(Router)
  private route: ActivatedRoute = inject(ActivatedRoute)

  cartas: any[] = [];

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id === undefined || id === null || isNaN(id))
    {
      this.router.navigate(['/cartas']);
    }
    else
    {
      this.cartaService.getByClienteId(id)
        .subscribe({
          next: (response) => {
            this.cartas = response;
          },
          error: (error) => {
            console.log(error);
          }
        });
    }
  }
}
