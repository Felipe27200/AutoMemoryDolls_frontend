import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { CommonResponseService } from '../../services/common-response.service';

import { ClienteFormComponent } from "../cliente-form/cliente-form.component";

import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-create',
  imports: [
    ClienteFormComponent,
    Toast,
  ],
  providers: [MessageService],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent {
  private clienteService: ClienteService = inject(ClienteService);
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)
  private router = inject(Router)

  onSubmit(formData: any)
  {
    console.dir(formData);

    this.clienteService.createCliente(formData)
      .subscribe({
        next: (response: any) => {
          console.log(response);

          this.router.navigate(["/clientes"])
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      })
  }
}
