import { Component, inject } from '@angular/core';
import { CartaFormComponent } from "../carta-form/carta-form.component";

import { CartaService } from '../../services/carta.service';

import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonResponseService } from '../../services/common-response.service';

@Component({
  selector: 'app-carta-update',
  imports: [
    CartaFormComponent,
    Toast,
  ],
  providers: [MessageService],  
  templateUrl: './carta-update.component.html',
  styleUrl: './carta-update.component.css'
})
export class CartaUpdateComponent {
  private cartaService = inject(CartaService)
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)
  private router = inject(Router)
  private route: ActivatedRoute = inject(ActivatedRoute)

  notFound!: any;
  carta!: any;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id === undefined || id === null || isNaN(id))
    {
      this.router.navigate(['/cartas']);
    }
    else
    {
      this.cartaService.getById(id)
        .subscribe({
          next: (response) => {
            this.carta = response;
          },
          error: (error) => {
            this.notFound = error.error;
          }
        });
    }
  }

  onSubmit(formData: any)
  {
    this.cartaService.updateCarta(formData, this.carta.id)
      .subscribe({
        next: (response) => {
          this.router.navigate(["/cartas"]);
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      });
  }
}
