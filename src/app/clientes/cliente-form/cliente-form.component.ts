import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [
    ReactiveFormsModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {
  @Input() titulo: string = '';
  @Input() cliente: any;

  @Output() eventEmitter = new EventEmitter();
  errors: any[] = [];

  private router: Router = inject(Router)

  private fb: FormBuilder = inject(FormBuilder)

  clienteForm = this.fb.group({
    nombre: ['', Validators.required],
    ciudad: ['', Validators.required],
    infoContacto: ['', Validators.required],
  });

  onSubmit ()
  {
    this.errors = [];

    if (!this.clienteForm.valid)
      return;

    if (this.nombre == null || this.nombre.value == null || this.nombre.value == undefined)
      this.errors.push("El nombre es requerido");
    if (this.ciudad == null || this.ciudad.value == null || this.ciudad.value == undefined)
      this.errors.push("La ciudad es requerida");
    if (this.infoContacto == null || this.infoContacto.value == null || this.infoContacto.value == undefined)
      this.errors.push("La información Contacto es requerida");

    if (this.errors.length > 0)
      return;

    let formData = {
      nombre: this.nombre?.value,
      ciudad: this.ciudad?.value,
      infoContacto: this.infoContacto?.value
    }

    this.eventEmitter.emit(formData);
  }

    ngOnChanges(changes: SimpleChanges): void {
    if (changes["cliente"] === null || changes["cliente"] === undefined 
      || changes["cliente"].currentValue === null || changes["cliente"].currentValue === undefined)
    {
      return;
    }

    this.cliente = changes["cliente"].currentValue;

    this.clienteForm.controls.nombre.setValue(this.cliente.nombre);
    this.clienteForm.controls.ciudad.setValue(this.cliente.ciudad);
    this.clienteForm.controls.infoContacto.setValue(this.cliente.infoContacto);
  }

  regresarClientes()
  {
    this.router.navigate(['/clientes'])
  }

  get nombre() { return this.clienteForm.get('nombre'); }
  get ciudad() { return this.clienteForm.get('ciudad'); }
  get infoContacto() { return this.clienteForm.get('infoContacto'); }
}
