import { Component, inject } from '@angular/core';
import { CartaFormComponent } from "../carta-form/carta-form.component";

import { CartaService } from '../../services/carta.service';

import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonResponseService } from '../../services/common-response.service';

@Component({
  selector: 'app-carta-create',
  imports: [
    CartaFormComponent,
    Toast,
  ],
  providers: [MessageService],  templateUrl: './carta-create.component.html',
  styleUrl: './carta-create.component.css'
})
export class CartaCreateComponent {
  private cartaService = inject(CartaService)
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)
  private router = inject(Router)


  onSubmit(formData: any)
  {
    this.cartaService.createCarta(formData)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      });
  }
}
