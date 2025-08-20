import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { ClienteService } from '../../services/cliente.service';
import { DollService } from '../../services/doll.service';
import { CartaEstadoService } from '../../services/carta-estado.service';

@Component({
  selector: 'app-carta-form',
  imports: [
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    SelectModule,
    TextareaModule
  ],  
  templateUrl: './carta-form.component.html',
  styleUrl: './carta-form.component.css'
})
export class CartaFormComponent implements OnInit, OnChanges {
  @Input() titulo: string = '';
  @Input() carta: any;

  @Output() eventEmitter = new EventEmitter();
  errors: any[] = [];

  clientes!: any[];
  dolls: any[] = [];
  cartaEstados!: any[];

  private router: Router = inject(Router);
  private fb: FormBuilder = inject(FormBuilder);
  private clienteService = inject(ClienteService);
  private dollService = inject(DollService);
  private cartaEstadoService = inject(CartaEstadoService);

  cartaForm = this.fb.group({
    motivo: ['', Validators.required],
    contenido: ['', Validators.required],
    autoMemoryDollId: ['', Validators.required],
    clienteId: ['', Validators.required],
    cartaEstadoId: ['', Validators.required],
  });

  onSubmit ()
  {
    this.errors = [];

    if (!this.cartaForm.valid)
      return;

    if (this.motivo == null || this.motivo.value == null || this.motivo.value == undefined)
      this.errors.push("El motivo es requerido");
    if (this.contenido == null || this.contenido.value == null || this.contenido.value == undefined)
      this.errors.push("El contenido es requerido");
    if (this.autoMemoryDollId == null || this.autoMemoryDollId.value == null || this.autoMemoryDollId.value == undefined)
      this.errors.push("La Doll es requerida");
    if (this.clienteId == null || this.clienteId.value == null || this.clienteId.value == undefined)
      this.errors.push("El cliente es requerido");
    if (this.cartaEstadoId == null || this.cartaEstadoId.value == null || this.cartaEstadoId.value == undefined)
      this.errors.push("El estado es requerido");

    console.log(this.cartaEstadoId?.value)

    if (this.errors.length > 0)
      return;

    let formData = {
      motivo: this.motivo?.value,
      contenido: this.contenido?.value,
      autoMemoryDollId: this.autoMemoryDollId?.value,
      clienteId: this.clienteId?.value,
      cartaEstadoId: this.cartaEstadoId?.value,
    }

    this.eventEmitter.emit(formData);
  }

  ngOnInit(): void {
    this.clienteService.getAll()
      .subscribe({
        next: (response) => {
          this.clientes = response;
        }
      });

      this.cartaEstadoService.getAll()
      .subscribe({
        next: (response) => {
          this.cartaEstados = response;
        }
      });

    this.dollService.getDisponibles()
      .subscribe({
        next: (response) => {
          this.dolls = response;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["carta"] === null || changes["carta"] === undefined 
      || changes["carta"].currentValue === null || changes["carta"].currentValue === undefined)
    {
      return;
    }

    this.carta = changes["carta"].currentValue;

    this.cartaForm.controls.motivo.setValue(this.carta.motivo);
    this.cartaForm.controls.contenido.setValue(this.carta.contenido);
    this.cartaForm.controls.autoMemoryDollId.setValue(this.carta.autoMemoryDolls.id);
    this.cartaForm.controls.clienteId.setValue(this.carta.cliente.id);
    this.cartaForm.controls.cartaEstadoId.setValue(this.carta.cartaEstado.id);

    this.dolls.push(this.carta.autoMemoryDolls);
  }

  regresarCartas()
  {
    this.router.navigate(['/cartas'])
  }

  get motivo() { return this.cartaForm.get('motivo'); }
  get contenido() { return this.cartaForm.get('contenido'); }
  get autoMemoryDollId() { return this.cartaForm.get('autoMemoryDollId'); }
  get clienteId() { return this.cartaForm.get('clienteId'); }
  get cartaEstadoId() { return this.cartaForm.get('cartaEstadoId'); }

}
