import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  selector: 'app-carta-table',
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
  templateUrl: './carta-table.component.html',
  styleUrl: './carta-table.component.css'
})
export class CartaTableComponent implements OnChanges {
  private router: Router = inject(Router)

  @Input() cartas: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["carta"] === null || changes["carta"] === undefined 
      || changes["carta"].currentValue === null || changes["carta"].currentValue === undefined)
    {
      return;
    }

    this.cartas = changes["carta"].currentValue;
  }


  editCarta(id: string | number)
  {
    this.router.navigate(['/cartas', +id!]);
  }
}
