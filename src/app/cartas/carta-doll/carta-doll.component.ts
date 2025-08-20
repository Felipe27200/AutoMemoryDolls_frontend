import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartaTableComponent } from "../carta-table/carta-table.component";

import { CommonResponseService } from '../../services/common-response.service';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-carta-doll',
  imports: [CartaTableComponent],
  templateUrl: './carta-doll.component.html',
  styleUrl: './carta-doll.component.css'
})
export class CartaDollComponent {
  private cartaService = inject(CartaService)
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
      this.cartaService.getByDollId(id)
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
