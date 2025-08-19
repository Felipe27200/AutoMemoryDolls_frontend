import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClienteService } from '../../services/cliente.service';
import { CommonResponseService } from '../../services/common-response.service';

import { ClienteFormComponent } from "../cliente-form/cliente-form.component";

import { Toast } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cliente-update',
  imports: [
    ClienteFormComponent,
    Toast,
    CardModule,
    ButtonModule,
  ],
  providers: [MessageService],
  templateUrl: './cliente-update.component.html',
  styleUrl: './cliente-update.component.css'
})
export class ClienteUpdateComponent implements OnInit {
  private clienteService: ClienteService = inject(ClienteService);
  private commonResponseService = inject(CommonResponseService);
  private messageService = inject(MessageService)

  private router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute)

  cliente!: any;
  notFound!: any;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id === undefined || id === null || isNaN(id))
    {
      this.router.navigate(['/clientes']);
    }
    else
    {
      this.clienteService.getById(id)
        .subscribe({
          next: (response) => {
            this.cliente = response;
          },
          error: (error) => {
            this.notFound = error.error;
          }
        });
    }
  }

  onSubmit(formData: any)
  {
    console.dir(formData);

    this.clienteService.updateCliente(formData, this.cliente.id)
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
