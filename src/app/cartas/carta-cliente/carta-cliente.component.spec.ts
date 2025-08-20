import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaClienteComponent } from './carta-cliente.component';

describe('CartaClienteComponent', () => {
  let component: CartaClienteComponent;
  let fixture: ComponentFixture<CartaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
