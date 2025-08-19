import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doll-form',
  imports: [
    ReactiveFormsModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './doll-form.component.html',
  styleUrl: './doll-form.component.css'
})
export class DollFormComponent implements OnChanges {
  @Input() titulo: string = '';
  @Input() doll: any;

  @Output() eventEmitter = new EventEmitter();
  errors: any[] = [];

  private router: Router = inject(Router)

  private fb: FormBuilder = inject(FormBuilder)

  dollForm = this.fb.group({
    nombre: ['', Validators.required],
    edad: ['', Validators.required],
  });

  onSubmit ()
  {
    this.errors = [];

    if (!this.dollForm.valid)
      return;

    if (this.nombre == null || this.nombre.value == null || this.nombre.value == undefined)
      this.errors.push("El nombre es requerido");
    if (this.edad == null || this.edad.value == null || this.edad.value == undefined)
      this.errors.push("La edad es requerida");

    if (isNaN(Number(this.edad?.value)))
      this.errors.push('La edad debe ser un número');
    if ((Number(this.edad?.value)) <= 0)
      this.errors.push('La edad debe ser mayor a cero');

    if (this.errors.length > 0)
      return;

    let formData = {
      nombre: this.nombre?.value,
      edad: this.edad?.value,
    }

    this.eventEmitter.emit(formData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["doll"] === null || changes["doll"] === undefined 
      || changes["doll"].currentValue === null || changes["doll"].currentValue === undefined)
    {
      return;
    }

    this.doll = changes["doll"].currentValue;

    this.dollForm.controls.nombre.setValue(this.doll.nombre);
    this.dollForm.controls.edad.setValue(this.doll.edad);
  }

  regresarDolls()
  {
    this.router.navigate(['/dolls'])
  }

  get nombre() { return this.dollForm.get('nombre'); }
  get edad() { return this.dollForm.get('edad'); }
}
