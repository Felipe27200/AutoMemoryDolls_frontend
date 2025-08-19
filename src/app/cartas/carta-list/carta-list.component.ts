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

import { CartaService } from '../../services/carta.service';
import { CommonResponseService } from '../../services/common-response.service';

@Component({
  selector: 'app-carta-list',
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
  ],    templateUrl: './carta-list.component.html',
  styleUrl: './carta-list.component.css'
})
export class CartaListComponent {
  private cartaService: CartaService = inject(CartaService);
  private messageService: MessageService = inject(MessageService);
  private confirmationService: ConfirmationService = inject(ConfirmationService)
  private commonResponseService: CommonResponseService = inject(CommonResponseService);
  private router: Router = inject(Router)

  cartas: any[] = [];

  ngOnInit(): void 
  {
    this.cartaService.getAll()
      .subscribe({
        next: (response) => {
          this.cartas = response;
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      });
  }

  editCarta(id: string | number)
  {
    this.router.navigate(['/cartas', +id!]);
  }

  dialogEliminar(carta: any, event: Event)
  {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Quiere eliminar a ${carta.nombre} como Carta?`,
      header: 'Eliminar Carta',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.eliminarCarta(carta);
      },
      reject: () => { }
    });
  }

  eliminarCarta(carta: any)
  {
    this.cartaService.deleteById(carta.id)
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
