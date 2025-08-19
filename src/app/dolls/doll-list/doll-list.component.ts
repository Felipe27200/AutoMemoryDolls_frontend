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

import { DollService } from '../../services/doll.service';
import { CommonResponseService } from '../../services/common-response.service';

@Component({
  selector: 'app-doll-list',
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
  ],   templateUrl: './doll-list.component.html',
  styleUrl: './doll-list.component.css'
})
export class DollListComponent implements OnInit {
  private dollService: DollService = inject(DollService);
  private messageService: MessageService = inject(MessageService);
  private confirmationService: ConfirmationService = inject(ConfirmationService)
  private commonResponseService: CommonResponseService = inject(CommonResponseService);
  private router: Router = inject(Router)

  dolls: any[] = [];

  ngOnInit(): void 
  {
    this.dollService.getAll()
      .subscribe({
        next: (response) => {
          this.dolls = response;
        },
        error: (error) => {
          this.messageService.addAll(this.commonResponseService.setToastErrorMessage(error));
        }
      });
  }

  editDoll(id: string | number)
  {
    this.router.navigate(['/dolls', +id!]);
  }

  dialogEliminar(doll: any, event: Event)
  {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Quiere eliminar a ${doll.nombre} como Doll?`,
      header: 'Eliminar Doll',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.eliminarDoll(doll);
      },
      reject: () => { }
    });
  }

  eliminarDoll(doll: any)
  {
    this.dollService.deleteById(doll.id)
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
