import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { Card } from 'primeng/card';
import { Toast } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ConfirmationService, MessageService } from 'primeng/api';

import { ClienteService } from '../../services/cliente.service';
import { CommonResponseService } from '../../services/common-response.service';

@Component({
  selector: 'app-cliente-list',
  imports: [
    CommonModule,
    Card,
    Toast,
    TableModule,
    IconFieldModule,
    InputIconModule,
    InputText,
    Button,
    ConfirmDialogModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ],  
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit {
  private clienteService: ClienteService = inject(ClienteService);
  private messageService: MessageService = inject(MessageService);
  private confirmationService: ConfirmationService = inject(ConfirmationService)
  private commonResponseService: CommonResponseService = inject(CommonResponseService);
  private router: Router = inject(Router)

  clientes: any[] = [];

  ngOnInit(): void 
  {
    this.clienteService.getAll()
      .subscribe({
        next: (response) => {
          this.clientes = response;
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      });
  }

  editCliente(id: string | number)
  {
    this.router.navigate(['/clientes', +id!]);
  }

  dialogEliminar(cliente: any, event: Event)
  {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Quiere eliminar a ${cliente.nombre} como Cliente?`,
      header: 'Eliminar Cliente',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.eliminarCliente(cliente);
      },
      reject: () => { }
    });
  }

  verCartas(id: string | number)
  {
    this.router.navigate(['/cartas/cartas-cliente', +id!]);
  }

  eliminarCliente(cliente: any)
  {
    this.clienteService.deleteById(cliente.id)
      .subscribe({
        next: (response) => {
          this.messageService.add({ severity: 'info', summary: 'Eliminado', detail: response.body });
          this.ngOnInit();
        },
        error: (error) => {
          if (error.hasOwnProperty("error") && error.error.hasOwnProperty("message"))
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        }
      });
  }
}
